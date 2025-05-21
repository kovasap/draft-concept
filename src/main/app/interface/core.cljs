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
            [cljs.pprint]
            [malli.core :as m]
            [taoensso.timbre :as log]
            [clojure.walk :as w]))

;; ----------------------------------------------------------------------------
;; Setup

(rf/reg-event-db
  :app/setup
  (fn [db _]
    {:current-encounter-map
     [[{:land-type "forest"} {:land-type "clearing"}]
      [{:land-type "clearing" :character-ids [:hare]}]
      [{:land-type "lake"} {:land-type "forest"}]]
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

; The encounter map, but with stuff like characters embedded in it
; (instead of tracked via references)
(rf/reg-sub
  :current-encounter-map-embedded
  (fn [db _]
    (w/postwalk 
      (fn [{:keys [character-ids] :as element}]
        (if character-ids
           (assoc element :characters (map (:characters db) character-ids))
           element))
      (:current-encounter-map db))))

; Nice way to generate subsciptions for many keys.
(doseq [kw [:current-encounter-map :player-characters :characters]]
  (rf/reg-sub
    kw
    (fn [db _] (kw db))))

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
