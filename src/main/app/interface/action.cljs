(ns app.interface.action
  (:require
    [app.interface.items :refer [is-usable?]]
    [app.interface.utils :refer [get-with-id]]
    [com.rpl.specter :as sp]
    [re-frame.core :as rf]))
    
; After every action, go to the next character in the queue (sorted by
; character "recovery").
; Call get-action on that character and do whatever it returns
; Then increment that character's recovery based on the action's recovery value
; and throw them back into the queue.

; If the character is controlled by a player, pause for input if necessary.

(defn get-next-character-id
  [characters]
  (:id (first (sort-by :next-ready-time characters))))

(defn increment-next-ready-time
  [character used-items]
  (update character
          :next-ready-time
          #(+ % (apply + (map :recovery-time used-items)))))

(rf/reg-event-db
  :advance-acting-character
  (fn [{:keys [characters] :as db} _]
     (assoc db :acting-character-id (get-next-character-id characters))))

(defn get-turn-event-fx
  "Given an acting character, return a vector of all the re-frame event-fx that
  will happen once that character acts, based on their items.
  Returns vector like:
  [[:event-fx-key args]
   ...]
  "
  [{:keys [world-map characters acting-character-id] :as _db}]
  (let [usable-items (filter #(is-usable? % db)
                       (:inventory (get-with-id acting-character-id
                                                characters)))]
    (concat
      (apply concat
        (for [{:keys [effects]} usable-items]
          (for [{:keys
                 [target-selector target-transformer transformer-options]}
                effects]
            (for [target-id (target-selector embedded-map id)]
              [:update-character
               target-id
               #(target-transformer % transformer-options)]))))
      [[:update-character id #(increment-next-ready-time % usable-items)]])))

(rf/reg-event-fx
  :take-next-action
  (fn [db _]
    {:fx (conj (get-turn-event-fx db)
               [:advance-acting-character])}))
