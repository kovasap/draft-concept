(ns app.interface.world-map
  (:require 
    [malli.core :as m]
    [app.interface.characters :refer [Character]]
    [app.interface.utils :refer [get-with-ids]]
    [com.rpl.specter :as sp]))

(def land-types
  {:forest {}
   :clearing {}
   :lake {}})

(def LandType
  (into [:enum] (keys land-types)))

(def Location
  [:map
   [:land-type LandType]
   [:character-ids [:set :keyword]]
   [:enemy-ids [:set :keyword]]])

(def EmbeddedLocation
  [:map
   [:land-type LandType]
   [:characters [:set Character]]
   [:enemies [:set Character]]])

(def WorldMap
  [:vector 
   [:vector Location]])

(def EmbeddedWorldMap
  [:vector 
   [:vector EmbeddedLocation]])

(defn embed-location
  [{:keys [character-ids enemy-ids] :as location} characters]
  (-> location
      (assoc :characters (get-with-ids character-ids characters))
      (assoc :enemies (get-with-ids enemy-ids characters))))

(m/=> embed-world-map [:=> [:cat WorldMap [:set Character]]
                       EmbeddedWorldMap])
(defn embed-world-map
  [world-map characters]
  (sp/transform (sp/filterer #(m/validate Location %))
                #(embed-location % characters) world-map))
 
(def world-map
  [[{:land-type :forest} {:land-type :clearing}]
   [{:land-type :clearing :character-ids [:hare] :enemy-ids [:tortoise]}]
   [{:land-type :lake} {:land-type :forest}]])

(defn get-location
  [])
