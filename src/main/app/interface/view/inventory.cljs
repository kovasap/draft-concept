(ns app.interface.view.inventory
  (:require [re-frame.core :as rf]
            [app.interface.utils :refer [get-with-id]]
            [reagent.core :as r]))

(defn item-view
  [item inventory-id]
  [:div {:style         {:border          "1px solid #ddd"
                         :borderRadius    "5px"
                         :backgroundColor "white"
                         :boxShadow       "0 2px 5px rgba(0,0,0,0.1)"}
         :key           (:display-name item)
         :draggable     "true"
         ; Without this, the :on-drop function will never be called.
         :on-drag-over  (fn [e] (.preventDefault e))
         :on-drag-start #(rf/dispatch
                           [:app.interface.items/set-currently-dragged-item
                            item
                            inventory-id])
         :on-drag-end   #(rf/dispatch
                           [:app.interface.items/set-currently-dragged-item
                            nil
                            inventory-id])
         :on-drop       #(rf/dispatch
                           [:app.interface.items/swap-items inventory-id item])}
   (if (nil? item)
     [:img {:src "item-images/chest-open.png"}]
     [:img {:src (:image item)}])])

(defn inventory-view
  [id]
  (let [{:keys [contents] :as _inventory}
        (get-with-id id @(rf/subscribe [:inventories]))]
    (into [:div {:key id}
           id]
          (for [item contents]
            [item-view item id]))))
