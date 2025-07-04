(ns app.interface.items
  (:require [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.malli-utils :refer [cast-all cast]]
            [com.rpl.specter :as sp]
            [re-frame.core :as rf]))

(register! ::item-id :keyword)

(register! ::item
  [:map
   [:id ::item-id]
   [:item-type :keyword]
   [:display-name :string]
   [:image :string]
   ; Abilities this item grants the wielding character.
   [:abilities [:set :app.interface.abilities/ability-id]]
   [:traits {:default #{}}
    [:set :app.interface.traits/trait]]
   [:recovery-time :int]])

(register! ::inventory-id :keyword)

(register! ::inventory
  [:map
   [:id ::inventory-id]
   ; The :contents vector should always be the same size after creation:
   ; empty spaces will be filled with nil.
   [:contents {:default []}
    [:vector [:maybe ::item-id]]]])

(def item-templates
  (memoize #(cast-all ::item
                      #{{:item-type    :mace
                         :display-name "Mace"
                         :image        "item-images/mace.png"
                         :abilties     #{:melee-attack}
                         :traits       #{:armor-penetrating :heavy}}
                        {:item-type    :boots
                         :display-name "Boots"
                         :image        "item-images/torch.png"
                         :abilities    #{:move}
                         :traits       #{:light}}})))

(defn generate-item-id
  ([db new-item] (generate-item-id db new-item 0))
  ([db new-item current-id-attempt]
   (let [candidate-id
         (keyword (str (name (:item-type new-item)) "-" current-id-attempt))]
     (if (contains? (set (map :id (:items db))) candidate-id)
       (generate-item-id db new-item (inc current-id-attempt))
       candidate-id))))

(defn path-to-inventory-contents
  [inventory-id]
  [:inventories sp/ALL #(= (:id %) inventory-id) :contents])

(defn add-item
  [db inventory-id item-type]
  (let [item (if (nil? item-type)
               nil
               (as-> item-type i
                 (sp/select-one [sp/ALL #(= i (:item-type %))]
                                (item-templates))
                 (assoc i :id (generate-item-id db i))))]
    (as-> db db
      (update db :items #(if (nil? item) % (conj % item)))
      (sp/transform (path-to-inventory-contents inventory-id)
                    #(conj % (:id item))
                    db))))

(defn add-inventory
  [db item-types path-to-owner]
  (if (empty? item-types)
    db
    (let [{:keys [inventory-id]} (sp/select-one path-to-owner db)]
      (as-> db db
        (if (contains? (set (map :id (:inventories db))) inventory-id)
          db
          (update db
                  :inventories
                  #(conj % (cast ::inventory {:id inventory-id}))))
        (add-inventory (add-item db inventory-id (first item-types))
                       (rest item-types)
                       path-to-owner)))))

(defn swap-elements
  [v e1 e2]
  (mapv #(cond (= % e1) e2
               (= % e2) e1
               :else    %)
    v))

; TODO fix nil handling here
(rf/reg-event-db
  ::swap-items
  [rf/debug]
  (fn [{:keys [current-drag] :as db} [_ inventory-id item-id]]
    (if (= inventory-id (:inventory-id current-drag))
      (sp/transform (path-to-inventory-contents inventory-id)
                    #(swap-elements % item-id (:item-id current-drag))
                    db)
      (->> db
           (sp/transform (path-to-inventory-contents inventory-id)
                         #(swap-elements % item-id (:item-id current-drag)))
           (sp/transform
             (path-to-inventory-contents (:inventory-id current-drag))
             #(swap-elements % item-id (:item-id current-drag)))))))

(rf/reg-event-db
  ::set-currently-dragged-item
  [rf/debug]
  (fn [db [_ item-id inventory-id]]
    (assoc db :current-drag {:item-id item-id :inventory-id inventory-id})))
