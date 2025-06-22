(ns app.interface.action
  (:require
    [app.interface.items :refer [is-usable?]]
    [app.interface.utils :refer [get-with-id]]
    [day8.re-frame.undo :as undo :refer [undoable]]  
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
  ::update-character
  [rf/debug]
  (fn [db [_ character-id update-fn]]
    (sp/transform [:characters sp/ALL #(= character-id (:id %))]
                  update-fn
                  db)))

(rf/reg-event-db
  ::apply-effect
  [rf/debug]
  (fn [db [_ {:keys [transformer transformer-options] :as _effect}]]
    (transformer db transformer-options)))

(rf/reg-event-db
  ::advance-acting-character
  [rf/debug]
  (fn [{:keys [characters] :as db} _]
    (assoc db :acting-character-id (get-next-character-id characters))))

(defn get-usable-items
  [{:keys [inventory] :as _character} db]
  (filter #(is-usable? % db) inventory))

(defn get-turn-event-fx
  "Given an acting character, return a vector of all the re-frame event-fx that
  will happen once that character acts, based on their items.
  Returns vector like:
  [[:event-fx-key args]
   ...]
  "
  [{:keys [characters acting-character-id] :as db}]
  (let [acting-character (get-with-id acting-character-id characters)
        item-to-use      (first (get-usable-items acting-character db))]
    (doto
      (concat [[::log
                (str (:full-name acting-character)
                     " is using "
                     (:display-name item-to-use))]]
              (map (fn [effect] [::apply-effect effect]) (:effects item-to-use))
              (map (fn [{:keys [animation]}]
                     [:app.interface.animations/play-animation
                      acting-character
                      animation])
                (:effects item-to-use))
              [[::update-character
                acting-character-id
                #(increment-next-ready-time % [item-to-use])]])
      print)))

(rf/reg-event-fx
  ::take-next-action
  [rf/debug (undoable "Take next action")]
  (fn [{:keys [db] :as _cofx} _]
    {:fx (conj (for [fx (get-turn-event-fx db)]
                 [:dispatch fx])
               [:dispatch [::advance-acting-character]])}))

(rf/reg-event-db
  ::log
  (fn [db [_ log-message]] (update db :log #(conj % log-message))))
  

