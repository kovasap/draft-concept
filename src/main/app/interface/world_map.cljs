(ns app.interface.world-map
  (:require 
    [malli.core :as m]
    [clojure.set :refer [union]]
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
   [:id :keyword]
   [:land-type LandType]
   [:character-ids {:default #{} :optional true} [:set :keyword]]])

(def EmbeddedLocation
  [:map
   [:id :keyword]
   [:land-type LandType]
   [:characters {:default #{} :optional true} [:set Character]]])

(def WorldMap
  [:vector 
   [:vector Location]])

(def EmbeddedWorldMap
  [:vector 
   [:vector EmbeddedLocation]])

(defn embed-location
  [{:keys [character-ids] :as location} characters]
  (-> location
      (assoc :characters (get-with-ids character-ids characters))))

(m/=> embed-world-map [:=> [:cat WorldMap [:set Character]]
                        EmbeddedWorldMap])
(defn embed-world-map
  [world-map characters]
  (sp/transform #(m/validate Location %)
                #(embed-location % characters) world-map))
 
(def world-map
  [[{:id :farbane :land-type :forest} {:id :clear :land-type :clearing}]
   [{:id :central :land-type :clearing :character-ids #{:hare :tortoise}}]
   [{:id :deep :land-type :lake} {:id nearbane :land-type :forest}]])

(defn get-location
  [embedded-map character-id]
  (sp/select-one
    [sp/ALL sp/ALL #(contains? (set (map :id characters)) %) character-id]
    embedded-map))
  
