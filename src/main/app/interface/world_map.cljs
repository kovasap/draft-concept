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

(register! ::world-map
  [:vector 
   [:vector ::location]])

(def world-map
  [[{:id :farbane :land-type :forest} {:id :clear :land-type :clearing}]
   [{:id :central :land-type :clearing :character-ids #{:hare :tortoise}}]
   [{:id :deep :land-type :lake} {:id :nearbane :land-type :forest}]])

(defn get-location
  [world-map character-id]
  (sp/select-one [sp/ALL
                  sp/ALL
                  (fn [{:keys [character-ids] :as _location}]
                    (contains? character-ids character-id))]
                 world-map))
  
