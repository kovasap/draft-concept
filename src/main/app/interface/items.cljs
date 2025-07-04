(ns app.interface.items
  (:require [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.malli-utils :refer [cast-all]]
            [com.rpl.specter :as sp]
            [re-frame.core :as rf]))

(register! ::item
  [:map
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
   ; The :contents vector will always be the same size: empty spaces will
   ; be filled with nil.
   [:contents {:default [nil nil nil]}
    [:vector [:maybe ::item]]]])

(def items
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

(defn new-item
  [item-type]
  (sp/select-one [sp/ALL #(= item-type (:item-type %))] (items)))

(defn swap-elements
  [v e1 e2]
  (mapv #(cond (= % e1) e2
               (= % e2) e1
               :else    %)
    v))

(defn inventory-contents-nav
  [inventory-id]
  [:inventories sp/ALL #(= (:id %) inventory-id) :contents])

(rf/reg-event-db
  ::swap-items
  [rf/debug]
  (fn [{:keys [current-drag] :as db} [_ inventory-id item]]
    (if (= inventory-id (:inventory-id current-drag))
      (sp/transform (inventory-contents-nav inventory-id)
                    #(swap-elements % item (:item current-drag))
                    db)
      (->> db
           (sp/transform (inventory-contents-nav inventory-id)
                         #(swap-elements % item (:item current-drag)))
           (sp/transform (inventory-contents-nav (:inventory-id current-drag))
                         #(swap-elements % item (:item current-drag)))))))

(rf/reg-event-db
  ::set-currently-dragged-item
  [rf/debug]
  (fn [db [_ item inventory-id]]
    (assoc db :current-drag {:item item :inventory-id inventory-id})))
