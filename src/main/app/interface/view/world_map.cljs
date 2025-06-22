(ns app.interface.view.world-map
  (:require [app.interface.view.character :refer [character-view]]
            [app.interface.utils :refer [get-with-id]]))

; Useful documentation at
; https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment to make
; the location layout.

(defn location-view
  [{:keys [land-type character-ids] :as _location} characters]
  [:div.col-4 {:style {:width "200px" :height "150px"}}
   land-type
   (into [:div]
         (mapv character-view
           (map #(get-with-id % characters) character-ids)))])

; TODO use
; https://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
; to draw lines between map locations
(defn world-map-view
  [world-map characters]
  (into [:div.container]
        (for [same-level-locations (reverse world-map)]
          (into [:div.row.justify-content-center]
                (map #(location-view % characters) same-level-locations)))))
