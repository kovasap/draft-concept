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

(defn get-item-animation-fx
  [item character-to-animate]
  (map (fn [{:keys [animation]}] [:app.interface.animations/play-animation
                                  character-to-animate
                                  animation])
    (:effects item)))

(defn get-rest-fx
  [character]
  [[:app.interface.messages-to-player/log
    (str (:full-name character) " cannot use any items and will rest...")
    [:app.interface.characters/increment-next-ready-time (:id character) 1]]])

(defn get-item-use-fx
  [item character]
  (concat [[:app.interface.messages-to-player/log
            (str (:full-name character) " is using " (:display-name item))]]
          (map (fn [effect] [::apply-effect effect]) (:effects item))
          (get-item-animation-fx item character)
          [[:app.interface.characters/increment-next-ready-time
            (:id character)
            (:recovery-time item)]]))

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
    (if (nil? item-to-use)
      (get-rest-fx acting-character)
      (get-item-use-fx item-to-use acting-character))))

(rf/reg-event-fx
  ::take-next-action
  [rf/debug (undoable "Take next action")]
  (fn [{:keys [db] :as _cofx} _]
    {:fx (concat (for [fx (get-turn-event-fx db)]
                   [:dispatch fx])
                 ; Use concat instead of conj to make sure this happens
                 ; after all other effects and not before.
                 [[:dispatch [::advance-acting-character]]])}))
