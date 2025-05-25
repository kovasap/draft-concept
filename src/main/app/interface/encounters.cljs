(ns app.interface.encounters
  (:require 
    [malli.core :as m]
    [malli.experimental :as mx]
    [app.interface.characters :refer [Character]]
    [clojure.walk :as w]))

(def land-types
  {:forest {}
   :clearing {}
   :lake {}})

(def Location
  [:map
   [:land-type (into [:enum] (keys land-types))]
   [:character-ids [:vector :keyword]]
   [:enemy-ids [:vector :keyword]]])

(def EmbeddedLocation
  [:map
   [:land-type (into [:enum] (keys land-types))]
   [:characters [:vector Character]]
   [:enemies [:vector Character]]])

(def Encounter
  [:vector 
   [:vector Location]])

(def EmbeddedEncounter
  [:vector 
   [:vector EmbeddedLocation]])

#_(m/=> embed-location
        [:=>
         [:cat #'Encounter [:map-of :keyword #'Character]]
         #'EmbeddedLocation])
(mx/defn embed-location
  :-
  EmbeddedEncounter
  [encounter :- Encounter characters :- [:map-of :keyword Character]]
  (w/postwalk (fn [{:keys [character-ids enemy-ids] :as location}]
                (print location)
                (print Location)
                (print (m/validate Location location))
                (if (m/validate Location location)
                  (-> location
                      (assoc :characters (map characters character-ids))
                      (assoc :enemies (map characters enemy-ids)))
                  location))
              encounter))
 

(def starter
  [[{:land-type :forest} {:land-type :clearing}]
   [{:land-type :clearing :character-ids [:hare] :enemy-ids [:tortoise]}]
   [{:land-type :lake} {:land-type :forest}]])
  
