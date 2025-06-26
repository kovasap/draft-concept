(ns app.interface.core
  (:require ["react-dom/client" :refer [createRoot]]
            [day8.re-frame.http-fx]
            [goog.dom :as gdom]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [app.interface.view.main :refer [main]]
            [app.interface.utils :refer [get-only associate-by]]
            [app.interface.world-map :refer [world-map]]
            [app.interface.animations]
            [app.interface.action]
            [app.interface.messages-to-player]
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
  ::setup
  (fn [_db _] initial-db))

;; -- Entry Point -------------------------------------------------------------

(defonce root (createRoot (gdom/getElement "app")))

(defn init
  []
  (rf/dispatch [::setup])
  (.render root (r/as-element [main])))

(defn- ^:dev/after-load re-render
  "The `:dev/after-load` metadata causes this function to be called after
  shadow-cljs hot-reloads code. This function is called implicitly by its
  annotation."
  []
  (rf/clear-subscription-cache!)
  (init))
