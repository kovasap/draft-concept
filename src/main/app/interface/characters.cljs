(ns app.interface.characters
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [com.rpl.specter :as sp]
            [app.interface.world-map :refer [get-location]]
            [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.utils :refer [associate-by]]))

(register! ::character-id :keyword)

(register! ::character
  [:map
   [:id ::character-id]
   [:full-name :string]
   [:image :string]
   [:class-id ::character-class-ids]
   ; Use ref here to avoid stack overflow, as it is a recursive definition.
   [:inventory {:default []} [:vector [:ref :app.interface.items/item]]]
   [:inventory-space {:default 3} :int]
   [:injuries {:default 0} :int]
   [:vigor :int]
   [:traumas {:default 0} :int]
   [:will :int]
   [:is-dead {:default false} :boolean]
   [:next-ready-time :int]
   [:affinities {:default #{}} [:set ::element]]
   [:weaknesses {:default #{}} [:set ::element]]
   [:controlled-by-player? :boolean]
   [:faction ::faction]])

(def factions
  {:player {:enemies #{:bandits}}
   :bandits {:enemies #{:player}}
   :merchants {:enemies #{:bandits}}})

(register! ::faction
           (into [:enum] (keys factions)))

(defn are-enemies?
  [character other-character]
  (contains? (:enemies ((:faction character) factions))
             (:faction other-character)))

(def elements
  {:fire {}
   :air {}
   :water {}
   :earth {}
   :light {}
   :dark {}})

(register! ::element
  (into [:enum] (keys elements)))

(register! ::animation
  [:enum :attack :none])

(register! ::animation-data
  [:map
   [:frames :int]])

(register! ::character-class
  [:map
   [:id :keyword]
   [:animations 
    [:map-of ::animation ::animation-data]]])

; TODO automatically determine :animation-frames based on the files in the
; resources/public/class-images/<class-name> directories
(def character-classes
  [{:id :skirmisher
    :animations 
    {:attack {:frames 5}}}
   {:id :scholar
    :animations 
    {:attack {:frames 2}}}])

; More sprites and animations can be found at
; https://github.com/wesnoth/wesnoth/tree/master/data/core/images/units

(register! ::character-class-ids
  (into [:enum] (map :id character-classes)))

(defn finalize-character
  [{:keys [class-id] :as character}]
  (as-> character c
    (assoc c :image (str "class-images/" (name class-id) "/idle.png"))
    (m/decode ::character c mt/default-value-transformer)
    (doto c #(m/validate ::character %))))

(def character-classes-by-id
  (associate-by :id character-classes))

(defn get-animation-frames
  [class-id animation]
  (:frames (animation (:animations (class-id character-classes-by-id)))))

(defn get-animation-frame-images
  [class-id animation]
  (conj (for [i (range (get-animation-frames class-id animation))]
          (str "class-images/"
               (name class-id)
               "/"
               (name animation)
               "/"
               (inc i)
               ".png"))
        ; Always end the animation back at idle
        (str "class-images/" (name class-id) "/idle.png")))
