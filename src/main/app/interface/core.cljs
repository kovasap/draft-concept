(ns app.interface.core
  ; Following https://cljdoc.org/d/metosin/malli/0.8.6/doc/clojurescript-function-instrumentation
  {:dev/always true}
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
            [app.interface.db :refer [initial-db]]
            [cljs.pprint]
            [malli.dev.cljs :as md]
            [malli.dev.pretty :as mdpretty]
            [malli.core :as m]
            [malli.instrument.cljs :as mi]
            [taoensso.timbre :as log]))

;; ----------------------------------------------------------------------------
;; Setup

(rf/reg-event-db
  :app/setup
  (fn [_db _] initial-db))
     

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
  (md/start! {:report (mdpretty/reporter)})
  (rf/dispatch [:app/setup])
  (.render root (r/as-element [main])))

(defn- ^:dev/after-load re-render
  "The `:dev/after-load` metadata causes this function to be called after
  shadow-cljs hot-reloads code. This function is called implicitly by its
  annotation."
  []
  (md/start! {:report (mdpretty/reporter)})
  (rf/clear-subscription-cache!)
  (init))
