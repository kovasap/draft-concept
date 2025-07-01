(ns app.interface.view.character
  (:require [clojure.string :as s]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [reagent.dom :as r-dom]))

(defn item-view
  [{:keys [image display-name] :as item}
   owning-character-id
   current-dragged-item]
  [:div {:style         {:border          "1px solid #ddd"
                         :borderRadius    "5px"
                         :backgroundColor "white"
                         :boxShadow       "0 2px 5px rgba(0,0,0,0.1)"}
         :key           display-name
         :draggable     "true"
         ; Without this, the :on-drop function will never be called.
         :on-drag-over  (fn [e] (.preventDefault e))
         :on-drag-start #(reset! current-dragged-item item)
         :on-drag-end   #(reset! current-dragged-item nil)
         :on-drop       #((rf/dispatch
                           [:app.interface.characters/swap-items-in-inventory
                            owning-character-id
                            @current-dragged-item
                            item]))}
   [:img {:src image}]])

(defn inventory-view
  [{:keys [inventory id] :as _character}]
  (let [current-dragged-item (r/atom nil)]
    (into [:div {:key (str "inventory for " id)}]
          (for [item inventory]
            [item-view item id current-dragged-item]))))

; I tried to make this a local ratom within the character-view, but that led to
; some hard-to-debug issues where the component was not re-rendering.
; It's probably best to keep this here or store a new :show-inventory? key on
; the character itself.
(def character-id-to-show-inventory-of (r/atom nil))

(defn character-view
  [{:keys [image id is-dead controlled-by-player? full-name vigor]
    :as   character}]
  [:div {:id id
         :on-mouse-over #(reset! character-id-to-show-inventory-of id)
         :on-mouse-out #(reset! character-id-to-show-inventory-of nil)}
   [:img {:style {:transform (s/join
                               " "
                               (remove s/blank?
                                 [(if controlled-by-player? nil "scaleX(-1)")
                                  (if is-dead "rotate(90deg)" nil)]))
                  :z-index   20
                  :filter    "drop-shadow(0px 0px 20px red)"}
          :src   image
          :alt   full-name}]
   [:span "Vigor: " vigor]
   (if (= @character-id-to-show-inventory-of id)
     [inventory-view character]
     nil)])
