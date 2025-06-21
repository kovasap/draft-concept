(ns app.interface.action
  (:require
    [app.interface.characters :refer [is-usable?]]
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
  :update-character
  (fn [db [_ character-id update-fn]]
    ; TODO fix this, probably broken
    (sp/transform [#(:characters %) #(= character-id (:id %))] update-fn db)))

(defn get-turn-event-fx
  "Given an acting character, return a vector of all the re-frame event-fx that
  will happen once that character acts, based on their items.
  Returns vector like:
  [[:event-fx-key args]
   ...]
  "
  [{:keys [world-map characters] :as _db} acting-character-id]
  (let [usable-items (filter #(is-usable? % db id)
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
    {:fx (get-turn-event-fx
           db
           (get-next-character-id (:characters db)))}))
