(ns app.interface.world-map
  (:require 
    [app.interface.malli-utils :refer [cast-all]]
    [app.interface.malli-schema-registry :refer [register!]]
    [app.interface.items :refer [new-item]]
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
   ; Absolute position on world map, on a scale from 0-100% of the
   ; total map size
   [:position [:map [:x :int] [:y :int]]]
   [:adjacent-location-ids [:set ::location-id]]
   [:inventory-id 
    {:default-fn #(keyword (str (name (:id %)) "-inventory"))}
    :app.interface.items/inventory-id]
   [:character-ids {:default #{}}
    [:set :app.interface.characters/character-id]]])

(register! ::world-map
  [:set ::location])

(defn default-world-map
  []
  (cast-all ::location
            #{{:id        :farbane
               :land-type :forest
               :adjacent-location-ids #{:clear :central}
               :position  {:x 0 :y 0}}
              {:id        :clear
               :land-type :clearing
               :adjacent-location-ids #{:farbane :central}
               :position  {:x 50 :y 0}}
              {:id            :central
               :land-type     :clearing
               :adjacent-location-ids #{:farbane :clear :deep :nearbane}
               :position      {:x 50 :y 50}
               :character-ids #{:hare :tortoise}}
              {:id        :deep
               :land-type :lake
               :adjacent-location-ids #{:central}
               :position  {:x 0 :y 100}}
              {:id        :nearbane
               :land-type :forest
               :adjacent-location-ids #{:central :deep}
               :position  {:x 100 :y 100}}}))

(defn get-location-of-character
  [world-map character-id]
  (sp/select-one [sp/ALL
                  (fn [{:keys [character-ids] :as _location}]
                    (contains? character-ids character-id))]
                 world-map))
