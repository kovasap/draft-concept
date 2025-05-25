(ns app.interface.view.main
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.interface.encounters :refer [embed-location]]
            [app.interface.view.encounter :refer [encounter-view]]
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
   [encounter-view 
    (embed-location
      @(rf/subscribe [:current-encounter-map])
      @(rf/subscribe [:characters]))]])
