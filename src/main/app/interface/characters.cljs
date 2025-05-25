(ns app.interface.characters
  (:require [malli.core :as m]
            [app.interface.items :refer [Item]]))

(def CharacterId
  :keyword)

(def Character
  [:map
   [:id CharacterId]
   [:full-name :string]
   [:image :string]
   [:class-keyword :keyword]
   [:inventory [:vector Item]]
   ; If injuries > earth composition, the character dies
   [:injuries :int]
   ; If traumas > water composition, the character dies
   [:traumas :int]
   [:is-dead :boolean]
   [:composition [:map [:fire :int]
                       [:air :int]
                       [:earth :int]
                       [:water :int]
                       [:light :int]
                       [:dark :int]]]
   [:controlled-by-player? :boolean]])

; Sprites and animations can be found at
; https://github.com/wesnoth/wesnoth/tree/master/data/core/images/units
(defn finalize-character
  [{:keys [class-keyword] :as character}]
  (let [finalized-character 
        (assoc character
               :injuries 0
               :traumas 0
               :is-dead false
               :image (str "class-images/" (name class-keyword) "/idle.png"))]
    (assert (m/validate Character finalized-character))
    finalized-character))
    

(def starting-characters
  (mapv
    finalize-character
    [{:full-name "Hare"
      :id :hare
      :class-keyword :skirmisher
      :inventory []
      :composition {:fire 1 :air 8 :earth 2 :water 3 :light 5 :dark 0}
      :controlled-by-player? true}
     {:full-name "Tortoise"
      :id :tortoise
      :class-keyword :skirmisher
      :inventory []
      :composition {:fire 1 :air 1 :earth 8 :water 3 :light 1 :dark 0}
      :controlled-by-player? false}]))
