(ns app.interface.view.character)

(defn character-view
  [{:keys [image is-dead] :as character}]
  [:img {:style {:transform (if is-dead "rotate(90deg)" nil)
                 :z-index   20
                 :filter    "drop-shadow(0px 0px 20px red)"}
         :src   image}])
