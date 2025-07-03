(ns app.interface.abilities
  (:require [com.rpl.specter :as sp]
            [malli.core :as m]
            [app.interface.world-map :refer [get-location]]
            [app.interface.factions :refer [are-enemies?]]
            [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.utils :refer [get-with-id]]
            [app.interface.traits :refer [calc-melee-damage]]
            [app.interface.characters :refer [update-character-in-db]]
            [app.interface.messages-to-player :refer [append-log]]
            [re-frame.core :as rf]))

(register! ::ability
  [:map
   [:id ::ability-id]
   [:transformer ::transformer]
   [:icon :string]
   [:animation :app.interface.characters/animation]])

; Returns nil if the db could not be modified
(register! ::transformer
  [:->
   :app.interface.db/db
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
  [{:keys [acting-character-id characters] :as db}]
  (let [target-id        (get-single-melee-target-id db acting-character-id)
        acting-character (get-with-id acting-character-id characters)
        target-character (get-with-id target-id characters)
        damage           (calc-melee-damage acting-character target-character)]
    (if (nil? target-character)
      nil
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
                         " damage!"))))))

(defn ranged-attack
  {:malli/schema (m/deref ::transformer)}
  [{:keys [acting-character-id characters] :as db}]
  nil)

(defn recover
  {:malli/schema (m/deref ::transformer)}
  [{:keys [acting-character-id] :as db}]
  (-> db
    (update-character-in-db ,, acting-character-id #(update % :vigor inc))
    (update-character-in-db ,, acting-character-id #(update % :will inc))))

(defn move
  {:malli/schema (m/deref ::transformer)}
  [{:keys [acting-character-id world-map characters] :as db}]
  (let [acting-character (get-with-id acting-character-id characters)
        current-location (get-location world-map acting-character-id)
        ; Move in arbitrary directions for now
        new-location-id  (first (:adjacent-location-ids current-location))]
    (if (nil? new-location-id)
      nil
      (as-> db tdb
        ; Remove current location character entry
        (sp/transform [:world-map
                       sp/ALL
                       #(= (:id %) (:id current-location))
                       :character-ids]
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
                         " to "         new-location-id))))))

(def abilities
  #{{:id :melee-attack :transformer melee-attack :animation :attack}
    {:id :ranged-attack :transformer ranged-attack :animation :attack}
    {:id :recover :transformer recover :animation :none}
    {:id :move :transformer move :animation :none}})

(register! ::ability-id
  (into [:enum] (map :id abilities)))

(defn is-usable?
  [ability-id db]
  (not (nil? ((:transformer (ability-id abilities)) db))))

(rf/reg-event-db
  ::apply-transformer
  (fn [db [_ transformer]]
    (transformer db)))

(rf/reg-event-fx
  ::use-ability
  (fn [{:keys [db] :as _cofx} [_ character-id ability-id]]
    (let [character (get-with-id character-id (:characters db))
          ability   (get-with-id ability-id abilities)]
      {:fx (mapv (fn [event] [:dispatch event])
             [[:app.interface.messages-to-player/log
               (str (:full-name character " is using ")
                    (:display-name ability))]
              [:app.interface.animations/play-animation
               character
               (:animation ability)]
              [::apply-transformer (:transformer ability)]
              [:app.interface.characters/increment-next-ready-time
               (:id character)]])})))
