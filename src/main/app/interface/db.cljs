(ns app.interface.db
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [com.rpl.specter :as sp]
            [app.interface.world-map :refer [world-map]]
            [app.interface.characters :refer [finalize-character]]
            [app.interface.items :refer [items]]
            [app.interface.malli-schema-registry :refer [register!]]))

(register! ::db
           [:map 
            [:world-map :app.interface.world-map/world-map]
            [:acting-character-id :app.interface.characters/character-id]
            [:characters [:set :app.interface.characters/character]]])

(def initial-db
  {:world-map  world-map
   :actions    []
   :acting-character-id :hare
   :characters (set
                 (map finalize-character
                   [{:full-name  "Hare"
                     :id         :hare
                     :vigor      3
                     :will       2
                     :inventory  [(sp/select-one [sp/ALL
                                                  #(= :mace (:item-type %))]
                                                 items)]
                     :class-id   :skirmisher
                     :faction    :player
                     :affinities #{:fire :air}
                     :controlled-by-player? true}
                    {:full-name  "Tortoise"
                     :id         :tortoise
                     :vigor      5
                     :will       5
                     :inventory  [(sp/select-one [sp/ALL
                                                  #(= :mace (:item-type %))]
                                                 items)]
                     :faction    :bandits
                     :class-id   :skirmisher
                     :affinities #{:earth}
                     :controlled-by-player? false}]))})
