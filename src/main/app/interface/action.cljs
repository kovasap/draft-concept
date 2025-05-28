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

; Wait for the player to set intentions, then hit "next turn"
; For each character, compute their intention if not directed by the player,
; storing it on a vector attached to the character.
; Then order the intentions by their speed in a new "turn" vector
; Clear out all the intention vectors on characters
; Then execute each one by one, with animations
; If an intention is invalidated by a previous action, handle this properly


(defn get-action
  [embedded-map character]
  )

(rf/reg-event-db
  :play-turn
  (fn [db _]))
    


