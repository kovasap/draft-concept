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
   [:inventory {:default []} [:vector [:ref ::item]]]
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


; --- Character Transformers ---

; These are structured as they are to:
; 1. Make it easy to reuse them.
; 2. Make it possible to generate descriptive strings for them in the UI.
; 3. Make it easier to modify them (e.g. make a weapon do more damage).

(register! ::character-transformer-options
  [:map])

(register! ::character-transformer
  [:-> ::character ::character-transformer-options ::character])

(defn do-damage
  #_{:malli/schema ::character-transformer}
  [character {:keys [damage]}]
  (update character :vigor #(- % damage)))


; --- End Character Transformers ---

; --- Map Transformers ---

(register! ::world-map-transformer-options
  [:map])

; Returns nil if the map cannot be changed
(register! ::world-map-transformer
  [:-> :app.interface.world-map/world-map ::world-map-transformer-options
   [:maybe :app.interface.world-map/world-map]])

; TODO implement
(defn move
  #_{:malli/schema ::world-map-transformer}
  [world-map {:keys [distance]}])

; --- End Map Transformers ---

; --- Character Selectors ---

(register! ::target-selector
  [:-> :app.interface.world-map/embedded-world-map ::character-id
   [:set ::character-id]])

(defn get-self
  [_embedded-map character-id]
  #{character-id})

(defn get-single-melee-target
  #_{:malli/schema ::target-selector}
  [embedded-map character-id]
  (let [location (get-location embedded-map character-id)
        characters (:characters location)
        character (sp/select-one #(= character-id (:id %)) characters)
        potential-targets (sp/select #(and (are-enemies? character %)
                                           (not (:is-dead %)))
                                     characters)]
    (if (empty? potential-targets)
      #{}
      ; Select target arbitrarily from options for now
      #{(:id (first potential-targets))})))

; --- End Selectors ---

(register! ::effect
  [:map 
   [:transformer ::transformer]
   [:transformer-options ::transformer-options]
   [:animation ::animation]])

(register! ::item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   ; Effects will happen in the order specified here when a character uses the
   ; item.
   [:effects [:vector ::effect]]
   [:recovery-time :int]])

(def items
  [{:item-type :mace
    :display-name "Mace"
    :effects [{:target-selector get-single-melee-target
               :target-transformer-options {:damage 2}
               :animation :attack
               :target-transformer do-damage}] 
    :recovery-time 5}
   ; TODO finish this item, which allows characters to move
   {:item-type :boots
    :display-name "Boots"
    :effects [{:world-map-transformer-options {:distance 1}
               :animation :none
               :world-map-transformer move}]}])

(defn is-usable?
  [{:keys [effects] :as item} embedded-map character-id]
  (some #(not (empty? %)) 
        (for [{:keys [target-selector]} effects]
          (target-selector embedded-map character-id))))

(defn has-valid-target?
  [{:keys [effects] :as item} embedded-map character-id]
  (->> effects
       (map (fn [{:keys [target-selector]}]
              (target-selector embedded-map character-id)))
       (remove empty?) ; No targets found
       (remove nil?) ; No selector found
       (not-empty)))

(defn can-transform-map?
  [{:keys [effects] :as item} embedded-map character-id]
  (->> effects
       (map (fn [{:keys [target-selector]}]
              (target-selector embedded-map character-id)))
       (remove empty?)
       (remove nil?)
       (not-empty)))
    
  

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

(def starting-characters
  (set
    (map
      finalize-character
      [{:full-name "Hare"
        :id :hare
        :vigor 3
        :will 2
        :inventory [(sp/select-one [sp/ALL #(= :mace (:item-type %))] items)]
        :class-id :skirmisher
        :affinities #{:fire :air}
        :controlled-by-player? true}
       {:full-name "Tortoise"
        :id :tortoise
        :vigor 5
        :will 5
        :inventory [(sp/select-one [sp/ALL #(= :mace (:item-type %))] items)]
        :class-id :skirmisher
        :affinities #{:earth}
        :controlled-by-player? false}])))

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
