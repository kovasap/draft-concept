(ns app.interface.turn
  (:require
    [app.interface.items :refer [Item]]
    [app.interface.characters :refer [CharacterId]]))
    

(def Action
  [:map
   [:target CharacterId]])

(def Turn
  [:vector Item])

(defn setup-turn
  [])

(rf/reg-event-db
  :play-turn)


