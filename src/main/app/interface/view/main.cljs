(ns app.interface.view.main
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.interface.world-map :refer [embed-world-map]]
            [app.interface.view.world-map :refer [world-map-view]]
            [app.interface.view.undo :refer [undo-button]]
            [cljs.pprint]))

(defn main
  "Main view for the application."
  []
  [:div.container
   [:h1 "My App"]
   [:div {:style {:display "flex"}}
    [:button.btn.btn-outline-primary {:on-click #(rf/dispatch [:app/setup])}
     "Reset App"]
    [undo-button]]
   [:div @(rf/subscribe [:message])]
   [:br]
   [:button.btn.btn-outline-primary {:on-click #(rf/dispatch [:take-next-action])}
    "Next Character Actions"]
   [world-map-view 
    (embed-world-map
      @(rf/subscribe [:world-map])
      @(rf/subscribe [:characters]))]])
