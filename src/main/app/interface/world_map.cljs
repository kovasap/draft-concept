(ns app.interface.world-map
  (:require 
    [malli.core :as m]
    [app.interface.utils :refer [get-with-ids]]
    [app.interface.malli-schema-registry :refer [register!]]
    [com.rpl.specter :as sp]))

(def land-types
  {:forest {}
   :clearing {}
   :lake {}})

(register! ::land-type
  (into [:enum] (keys land-types)))

(register! ::location
  [:map
   [:id :keyword]
   [:land-type ::land-type]
   [:character-ids {:default #{} :optional true} [:set :keyword]]])

(register! ::embedded-location
  [:map
   [:id :keyword]
   [:land-type ::land-type]
   [:characters {:default #{} :optional true} [:set :app.interface.characters/character]]])

(register! ::world-map
  [:vector 
   [:vector ::location]])

(register! ::embedded-world-map
  [:vector 
   [:vector ::embedded-location]])

(defn embed-location
  [{:keys [character-ids] :as location} characters]
  (-> location
      (assoc :characters (get-with-ids character-ids characters))))

(defn embed-world-map
  {:malli/schema [:->
                  ::world-map
                  [:set :app.interface.characters/character]
                  ::embedded-world-map]}
  [world-map characters]
  (sp/transform #(m/validate ::location %)
                #(embed-location % characters)
                world-map))
 
(def world-map
  [[{:id :farbane :land-type :forest} {:id :clear :land-type :clearing}]
   [{:id :central :land-type :clearing :character-ids #{:hare :tortoise}}]
   [{:id :deep :land-type :lake} {:id :nearbane :land-type :forest}]])

(defn get-location
  [embedded-map character-id]
  (sp/select-one [sp/ALL
                  sp/ALL
                  (fn [{:keys [characters] :as _embedded_location}]
                    (contains? (set (map :id characters)) character-id))]
                 embedded-map))
  
