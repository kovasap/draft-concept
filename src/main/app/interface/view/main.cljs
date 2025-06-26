(ns app.interface.view.main
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.interface.view.world-map :refer [world-map-view]]
            [app.interface.view.undo :refer [undo-button]]
            [cljs.pprint]))

(defn main
  "Main view for the application."
  []
  [:div.container
   [:h1 "My App"]
   [:div @(rf/subscribe [:message])]
   [:div {:style {:display "flex"}}
    [:button.btn.btn-outline-primary {:on-click
                                      #(rf/dispatch
                                         [:app.interface.core/setup])}
     "Reset App"]
    [undo-button]]
   [:br]
   [:button.btn.btn-outline-primary
    {:on-click #(rf/dispatch [:app.interface.action/take-next-action])}
    "Next Character Actions"]
   [world-map-view
    @(rf/subscribe [:world-map])
    @(rf/subscribe [:characters])]
   [:br]
   [:br]
   [:div {:style {:display "flex"}}
     (into [:div
            [:h3 "Action Log"]]
           (for [log-item @(rf/subscribe [:log])]
             [:p log-item]))
     (into [:div
            [:h3 "Turn Order"]]
           (for [{:keys [full-name next-ready-time]} 
                 (sort-by :next-ready-time @(rf/subscribe [:characters]))]
              [:p next-ready-time "    " full-name]))]])
