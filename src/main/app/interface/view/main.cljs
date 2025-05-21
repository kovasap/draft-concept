(ns app.interface.view.main
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [cljs.pprint]))

(defn undo-button
  []
  ; only enable the button when there's undos
  (let [undos? (rf/subscribe [:undos?])]
    (fn []
      [:button.btn.btn-outline-primary
       {:disabled (not @undos?)
        :on-click #(rf/dispatch [:undo])
        :style {:margin-right "auto"}}
       "Undo"])))


(defn encounter-map
  []
  [:div.container
   [:div.row
    [:div.col-sm "1"]
    [:div.col-sm "1"]
    [:div.col-sm "1"]]])

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
   [encounter-map]])
