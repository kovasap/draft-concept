(ns app.interface.action
  (:require
    [app.interface.items :refer [Item]]
    [app.interface.characters :refer [CharacterId]]))
    

(def Action
  [:map
   [:target CharacterId]])

(def Turn
  [:vector Action])

(defn setup-turn
  [])


; After every action, go to the next character in the queue (sorted by
; character "recovery").
; Call get-action on that character and do whatever it returns
; Then increment that character's recovery based on the action's recovery value
; and throw them back into the queue.

; If the character is controlled by a player, pause for input if necessary.

(defn get-action
  [embedded-map character])
  

(rf/reg-event-db
  :play-turn
  (fn [db _]))
    


