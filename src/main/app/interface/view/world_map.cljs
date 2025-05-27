(ns app.interface.view.world-map
  (:require [app.interface.view.character :refer [character-view]]))

; Useful documentation at
; https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment to make
; the location layout.

(defn location-view
  [{:keys [land-type characters enemies] :as location}]
  [:div.col-4 {:style {:width "200px" :height "150px"}}
   land-type
   (into [:div]
         (concat (mapv character-view characters)
                 (mapv character-view enemies)))])

; TODO use
; https://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
; to draw lines between map locations
(defn world-map-view
  [embedded-encounter]
  (into [:div.container]
        (for [same-level-locations (reverse embedded-encounter)]
          (into [:div.row.justify-content-center]
                (map location-view same-level-locations)))))
