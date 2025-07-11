(ns app.interface.view.inventory
  (:require [re-frame.core :as rf]
            [app.interface.utils :refer [get-with-id]]
            [reagent.core :as r]))

(defn item-hover-view
  [{:keys [display-name hovered] :as _item}]
  [:div {:style {:display (if hovered "block" "none")}}
   display-name])

(defn item-view
  [item-id inventory-id]
  (let [item (get-with-id item-id @(rf/subscribe [:items]))]
    [:div {:style         {:border          "1px solid #ddd"
                           :borderRadius    "5px"
                           :background-color "rgba(234, 219, 203, 1.0)"
                           :boxShadow       "0 2px 5px rgba(0,0,0,0.1)"}
           :key           (:display-name item)
           :on-mouse-over #(rf/dispatch [:app.interface.items/set-hovered
                                         item-id])
           :on-mouse-out  #(rf/dispatch [:app.interface.items/set-not-hovered
                                         item-id])
           :draggable     "true"
           ; Without this, the :on-drop function will never be called.
           :on-drag-over  (fn [e] (.preventDefault e))
           :on-drag-start #(rf/dispatch
                             [:app.interface.items/set-currently-dragged-item
                              item-id
                              inventory-id])
           :on-drag-end   #(rf/dispatch
                             [:app.interface.items/set-currently-dragged-item
                              nil
                              inventory-id])
           :on-drop       #(rf/dispatch [:app.interface.items/swap-items
                                         inventory-id
                                         item-id])}
     [:img {:src   (:image item)
            :style {:max-width "100%" :height "auto"}}]
     [item-hover-view item]]))

(defn inventory-view
  [id]
  (let [{:keys [contents] :as _inventory}
        (get-with-id id @(rf/subscribe [:inventories]))]
    [:div.container {:key id}
     (into [:div.row]
       (for [item-id contents]
         [:div.col-4 {:style {:padding "0px"}} [item-view item-id id]]))]))
