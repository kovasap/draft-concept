(ns app.interface.view.world-map
  (:require [app.interface.view.character :refer [character-view]]
            [app.interface.utils :refer [get-with-id]]
            [reagent.core :as r]))

; Useful documentation at
; https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment to make
; the location layout.

(def land-type-styles
  {:forest {:background-color "rgba(89, 130, 64, 0.99)"}
   :clearing {:background-color "rgba(190, 230, 165, 0.99)"}
   :lake {:background-color "rgba(97, 144, 255, 0.99)"}})

(def location-size-percent
  {:width 40
   :height 15})

(defn location-view
  [{:keys [land-type character-ids id] {:keys [x y]} :position :as _location}
   characters]
  [:div {:style (merge {:width    (str (:width location-size-percent) "%")
                        :height   (str (:height location-size-percent) "%")
                        :top      (str y "%")
                        :left     (str x "%")
                        :position "absolute"}
                       (land-type land-type-styles))
         :key   id}
   land-type
   (into [:div]
         (map (fn [cid] [character-view (get-with-id cid characters)])
           character-ids))])

(defn build-connections
  [{:keys [adjacent-location-ids id] {:keys [x y]} :position :as _location}
   world-map]
  (for [adj-id adjacent-location-ids
        :let   [{{adj-x :x adj-y :y} :position}       (get-with-id adj-id
                                                                   world-map)
                {loc-width :width loc-height :height} location-size-percent]]
    [:line {:x1       (str (+ (/ loc-width 2) x) "%")
            :y1       (str (+ (/ loc-height 2) y) "%")
            :x2       (str (+ (/ loc-width 2) adj-x) "%")
            :y2       (str (+ (/ loc-height 2) adj-y) "%")
            :stroke   "rgba(0, 0, 0, 0.3)"
            ; Necessary for react since this is in a sequence of elements
            :key      (str id "->" adj-id)
            ; Useful to see this value in the chrome inspector
            :data-key (str id "->" adj-id)}]))

(defn world-map-view
  [world-map characters]
  (into [:div.container {:style
                         {:width "700px" :height "500px" :position "relative"}}]
        (conj (map #(location-view % characters) world-map)
              (into [:svg {:width "100%" :height "100%"}]
                    (map #(build-connections % world-map) world-map)))))
