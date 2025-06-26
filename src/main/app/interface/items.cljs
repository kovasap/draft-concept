(ns app.interface.items
  (:require [com.rpl.specter :as sp]
            [malli.core :as m]
            [app.interface.world-map :refer [get-location]]
            [app.interface.factions :refer [are-enemies?]]
            [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.utils :refer [get-with-id]]
            [app.interface.messages-to-player :refer [append-log]]))

(register! ::effect
  [:map
   [:transformer ::transformer]
   [:transformer-options ::transformer-options]
   [:animation :app.interface.characters/animation]])

(register! ::tag [:enum :aquatic :sword :lance :axe])

(register! ::item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   ; Effects will happen in the order specified here when a character uses
   ; the item.
   [:effects [:vector ::effect]]
   [:tags {:default #{}}
    [:set ::tag]]
   [:recovery-time :int]])

(defn is-usable?
  "An item is usable if ALL of its effect transformers can do something
  (return non-nil values)."
  [{:keys [effects] :as _item} db]
  (->> effects
       (map (fn [{:keys [transformer transformer-options]}]
              (transformer db transformer-options)))
       (remove nil?)
       (not-empty)))

; --- Transformers ---

; These are structured with an options map and a separate function to:
; 1. Make it easy to reuse them.
; 2. Make it possible to generate descriptive strings for them in the UI.
; 3. Make it easier to modify them (e.g. make a weapon do more damage).

(register! ::transformer-options [:map])

; Returns nil if the db could not be modified
(register! ::transformer
  [:->
   :app.interface.db/db
   ::transformer-options
   [:maybe :app.interface.db/db]])

(defn is-valid-target?
  [attacking-character-id query-character-id characters]
  (let [attacking-character (get-with-id attacking-character-id characters)
        query-character (get-with-id query-character-id characters)]
    (and (are-enemies? attacking-character query-character)
         (not (:is-dead query-character)))))

(defn get-single-melee-target-id
  [{:keys [world-map characters] :as _db} attacking-character-id]
  (->> (:character-ids (get-location world-map attacking-character-id))
    (filter #(is-valid-target? attacking-character-id % characters)) 
    (first)))

(defn melee-attack
  {:malli/schema (m/deref ::transformer)}
  [{:keys [acting-character-id characters] :as db} {:keys [damage]}]
  (let [target-id        (get-single-melee-target-id db acting-character-id)
        acting-character (get-with-id acting-character-id characters)
        target-character (get-with-id target-id characters)]
    (as-> db tdb
      (sp/transform [:characters sp/ALL #(= target-id (:id %)) :vigor]
                    #(- % damage)
                    tdb)
      (append-log tdb
                  (str (:full-name acting-character)
                       " strikes "
                       (:full-name target-character)
                       " for "
                       damage
                       " damage!")))))

(defn move
  {:malli/schema (m/deref ::transformer)}
  [{:keys [acting-character-id world-map characters] :as db}
   {:keys [distance]}]
  (let [acting-character (get-with-id acting-character-id characters)
        current-location (get-location world-map acting-character-id)
        ; Move in arbitrary directions for now
        new-location-id  (first (:adjacent-location-ids current-location))]
    (as-> db tdb
      ; Remove current location character entry
      (sp/transform
        [:world-map sp/ALL #(= (:id %) (:id current-location)) :character-ids]
        #(disj % acting-character-id)
        tdb)
      ; Add new location character entry
      (sp/transform
        [:world-map sp/ALL #(= (:id %) new-location-id) :character-ids]
        #(conj % acting-character-id)
        tdb)
      (append-log tdb
                  (str (:full-name acting-character)
                       " moves from " (:id current-location)
                       " to "         new-location-id)))))

; --- End Transformers ---

(def items
  [{:item-type :mace
    :display-name "Mace"
    :effects [{:transformer-options {:damage 2}
               :animation :attack
               :transformer melee-attack}] 
    :recovery-time 5}
   {:item-type :boots
    :display-name "Boots"
    :effects [{:transformer-options {:distance 1}
               :animation :none
               :transformer move}]
    :recovery-time 5}])

(defn new-item
  [item-type]
  (sp/select-one [sp/ALL #(= item-type (:item-type %))] items))
