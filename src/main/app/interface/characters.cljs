(ns app.interface.characters
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [com.rpl.specter :as sp]
            [app.interface.items :refer [Item items]]
            [app.interface.utils :refer [associate-by]]))

(def CharacterId
  :keyword)

(def elements
  {:fire {}
   :air {}
   :water {}
   :earth {}
   :light {}
   :dark {}})

(def Element
  (into [:enum] (keys elements)))

(def Animations
  [:enum :attack])

(def AnimationData
  [:map
   [:frames :int]])

(def CharacterClass
  [:map
   [:id :keyword]
   [:animations 
    [:map-of Animations AnimationData]]])

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

(def CharacterClassIds
  (into [:enum] (map :id character-classes)))

(def factions
  {:player {:enemies #{:bandits}}
   :bandits {:enemies #{:player}}
   :merchants {:enemies #{:bandits}}})

(def Faction
  (into [:enum] (keys factions)))

(defn are-enemies?
  [character other-character]
  (contains? (:enemies ((:faction character) factions))
             (:faction other-character)))

(def Character
  [:map
   [:id CharacterId]
   [:full-name :string]
   [:image :string]
   [:class-id CharacterClassIds]
   [:inventory {:default []} [:vector Item]]
   [:inventory-space {:default 3} :int]
   [:injuries {:default 0} :int]
   [:vigor :int]
   [:traumas {:default 0} :int]
   [:will :int]
   [:is-dead {:default false} :boolean]
   [:next-ready-time :int]
   [:affinities {:default #{}} [:set Element]]
   [:weaknesses {:default #{}} [:set Element]]
   [:controlled-by-player? :boolean]
   [:faction Faction]])

(defn finalize-character
  [{:keys [class-id] :as character}]
  (as-> character c
    (assoc c :image (str "class-images/" (name class-id) "/idle.png"))
    (m/decode Character c mt/default-value-transformer)
    (doto c #(m/validate Character %))))

(def starting-characters
  (set
    (map
      finalize-character
      [{:full-name "Hare"
        :id :hare
        :vigor 3
        :will 2
        :inventory [(sp/select-one #(= :mace (:item-type %)) items)]
        :class-id :skirmisher
        :affinities #{:fire :air}
        :controlled-by-player? true}
       {:full-name "Tortoise"
        :id :tortoise
        :vigor 5
        :will 5
        :inventory [(sp/select-one #(= :mace (:item-type %)) items)]
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
