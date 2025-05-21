(ns app.interface.view.encounter-map
  (:require [app.interface.view.character :refer [character-view]]))

(defn location-view
  [{:keys [land-type characters] :as location}]
  [:div.col-4 {:style {:width "200px" :height "150px"}}
   land-type
   (into [:div]
         (mapv character-view characters))])

; TODO use
; https://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
; to draw lines between map locations
(defn encounter-map-view
  [embedded-encounter-map]
  (into [:div.container]
        (for [same-level-locations (reverse embedded-encounter-map)]
          (into [:div.row.justify-content-center]
                (map location-view same-level-locations)))))
