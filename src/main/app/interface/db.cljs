(ns app.interface.db
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [day8.re-frame.undo :as undo :refer [undoable]]  
            [re-frame.core :as rf]
            [com.rpl.specter :as sp]
            [app.interface.world-map :refer [world-map]]
            [app.interface.characters :refer [finalize-character]]
            [app.interface.items :refer [new-item]]
            [app.interface.malli-schema-registry :refer [register!]]))

(register! ::db
  [:map
   [:message :string]
   [:log [:vector :string]]
   [:world-map [:ref :app.interface.world-map/world-map]]
   [:acting-character-id [:ref :app.interface.characters/character-id]]
   [:characters [:set [:ref :app.interface.characters/character]]]])

(def initial-db
  {:world-map  world-map
   :message    ""
   :log        ["first message"]
   :acting-character-id :hare
   :characters (set
                 (map finalize-character
                   [{:full-name  "Hare"
                     :id         :hare
                     :vigor      3
                     :will       2
                     :inventory  [(new-item :mace) (new-item :boots)]
                     :class-id   :skirmisher
                     :faction    :player
                     :affinities #{:fire :air}
                     :controlled-by-player? true}
                    {:full-name  "Tortoise"
                     :id         :tortoise
                     :vigor      5
                     :will       5
                     :inventory  [(new-item :boots)]
                     :faction    :bandits
                     :class-id   :skirmisher
                     :affinities #{:earth}
                     :controlled-by-player? false}]))})

; Nice way to generate subsciptions for many keys.
(doseq [kw [:world-map :player-characters :characters :message :log]]
  (rf/reg-sub
    kw
    (fn [db _] (kw db))))
