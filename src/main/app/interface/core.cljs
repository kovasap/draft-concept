(ns app.interface.core
  (:require ["react-dom/client" :refer [createRoot]]
            [day8.re-frame.http-fx]
            [day8.re-frame.undo :as undo :refer [undoable]]  
            [goog.dom :as gdom]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [app.interface.view.main :refer [main]]
            [app.interface.utils :refer [get-only associate-by]]
            [app.interface.characters :refer [starting-characters]]
            [app.interface.world-map :refer [world-map]]
            [app.interface.animations]
            [cljs.pprint]
            [malli.core :as m]
            [taoensso.timbre :as log]))

;; ----------------------------------------------------------------------------
;; Setup

(rf/reg-event-db
  :app/setup
  (fn [db _]
    {:world-map world-map
     :actions []
     :player-characters (into [] (map :id starting-characters))
     :characters (associate-by :id starting-characters)}))
     

(rf/reg-event-db
  :message
  (undoable "Send message")
  (fn [db [_ message]]
    (assoc db :message message)))

(rf/reg-sub
  :message
  (fn [db _]
    (:message db)))

; Nice way to generate subsciptions for many keys.
(doseq [kw [:world-map :player-characters :characters]]
  (rf/reg-sub
    kw
    (fn [db _] (kw db))))

;; -- Game Flow -------------------------------------------------------------


;; -- Entry Point -------------------------------------------------------------

(defonce root (createRoot (gdom/getElement "app")))

(defn init
  []
  (rf/dispatch [:app/setup])
  (.render root (r/as-element [main])))

(defn- ^:dev/after-load re-render
  "The `:dev/after-load` metadata causes this function to be called after
  shadow-cljs hot-reloads code. This function is called implicitly by its
  annotation."
  []
  (rf/clear-subscription-cache!)
  (init))
