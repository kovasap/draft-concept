(ns app.interface.view.character
  (:require [app.interface.view.inventory :refer [inventory-view]]
            [app.interface.characters :refer [path-to-character]]
            [app.interface.utils :refer [get-with-id]]
            [re-frame.core :as rf]
            [clojure.string :as s]))

(defn character-view
  [{:keys [image
           id
           is-dead
           controlled-by-player?
           full-name
           vigor
           show-details?
           inventory-id]
    :as   _character}]
  [:div {:id id :style {:position "relative"}}
   [:img {:style {:transform (s/join
                               " "
                               (remove s/blank?
                                 [(if controlled-by-player? nil "scaleX(-1)")
                                  (if is-dead "rotate(90deg)" nil)]))
                  :z-index   20
                  :filter    "drop-shadow(0px 0px 20px red)"}
          :src   image
          :alt   full-name}]
   [:div {:style {:position "absolute" :top "0%" :left "0%"}}
    vigor]
   (if show-details?
     [inventory-view inventory-id]
     nil)])
