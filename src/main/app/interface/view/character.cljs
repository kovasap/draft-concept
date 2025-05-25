(ns app.interface.view.character
  (:require [clojure.string :as s]))

(defn character-view
  [{:keys [image is-dead controlled-by-player?] :as character}]
  [:img
   {:style {:transform (s/join " "
                               (remove s/blank?
                                 [(if controlled-by-player? nil "scaleX(-1)")
                                  (if is-dead "rotate(90deg)" nil)]))
            :z-index   20
            :filter    "drop-shadow(0px 0px 20px red)"}
    :src   image}])
