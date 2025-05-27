(ns app.interface.world-map
  (:require 
    [malli.core :as m]
    [malli.experimental :as mx]
    [app.interface.characters :refer [Character]]
    [clojure.walk :as w]))

(def land-types
  {:forest {}
   :clearing {}
   :lake {}})

(def LandType
  (into [:enum] (keys land-types)))

(def Location
  [:map
   [:land-type LandType]
   [:character-ids [:vector :keyword]]
   [:enemy-ids [:vector :keyword]]])

(def EmbeddedLocation
  [:map
   [:land-type LandType]
   [:characters [:vector Character]]
   [:enemies [:vector Character]]])

(def WorldMap
  [:vector 
   [:vector Location]])

(def EmbeddedWorldMap
  [:vector 
   [:vector EmbeddedLocation]])

#_(m/=> embed-location
        [:=>
         [:cat #'WorldMap [:map-of :keyword #'Character]]
         #'EmbeddedLocation])
(mx/defn embed-location
  :-
  EmbeddedWorldMap
  [encounter :- WorldMap characters :- [:map-of :keyword Character]]
  (w/postwalk (fn [{:keys [character-ids enemy-ids] :as location}]
                (if (m/validate Location location)
                  (-> location
                      (assoc :characters (map characters character-ids))
                      (assoc :enemies (map characters enemy-ids)))
                  location))
              encounter))
 
(def world-map
  [[{:land-type :forest} {:land-type :clearing}]
   [{:land-type :clearing :character-ids [:hare] :enemy-ids [:tortoise]}]
   [{:land-type :lake} {:land-type :forest}]])
