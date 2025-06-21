(ns app.interface.world-map
  (:require 
    [malli.core :as m]
    [app.interface.malli-schema-registry :refer [register!]]
    [com.rpl.specter :as sp]))

(def land-types
  {:forest {}
   :clearing {}
   :lake {}})

(register! ::land-type
  (into [:enum] (keys land-types)))

(register! ::location-id :keyword)

(register! ::location
           [:map
            [:id ::location-id]
            [:land-type ::land-type]
            [:adjacent-location-ids [:set ::location-id]]
            [:character-ids {:default #{} :optional true}
             [:set :app.interface.characters/character-id]]])

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
