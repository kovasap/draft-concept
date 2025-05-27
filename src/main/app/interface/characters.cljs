(ns app.interface.characters
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [app.interface.items :refer [Item]]
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

; TODO automatically determine :animation-frames based on the files in the
; resources/public/class-images/<class-name> directories
(def character-classes
  [{:id :skirmisher
    :animation-frames {:attack 5}}
   {:id :scholar
    :animation-frames {:attack 2}}])

; More sprites and animations can be found at
; https://github.com/wesnoth/wesnoth/tree/master/data/core/images/units

(def CharacterClassIds
  (into [:enum] (map :id character-classes)))

(def Character
  [:map
   [:id CharacterId]
   [:full-name :string]
   [:image :string]
   [:class-id CharacterClassIds]
   [:inventory {:default []} [:vector Item]]
   [:injuries {:default 0} :int]
   [:vigor :int]
   [:traumas {:default 0} :int]
   [:will :int]
   [:is-dead {:default false} :boolean]
   [:affinities {:default []} [:vector Element]]
   [:weaknesses {:default []} [:vector Element]]
   [:controlled-by-player? :boolean]])

(defn finalize-character
  [{:keys [class-id] :as character}]
  (as-> character c
    (assoc c :image (str "class-images/" (name class-id) "/idle.png"))
    (m/decode Character c mt/default-value-transformer)
    (doto c #(m/validate Character %))))

(def starting-characters
  (mapv
    finalize-character
    [{:full-name "Hare"
      :id :hare
      :vigor 3
      :will 2
      :class-id :skirmisher
      :affinities [:fire :air]
      :controlled-by-player? true}
     {:full-name "Tortoise"
      :id :tortoise
      :vigor 5
      :will 5
      :class-id :skirmisher
      :affinities [:earth]
      :controlled-by-player? false}]))

(def character-classes-by-id
  (associate-by :id character-classes-by-id))

(defn get-animation-frames
  [class-id animation]
  (animation (:animation-frames (class-id character-classes-by-id))))

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
