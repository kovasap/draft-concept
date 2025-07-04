(ns app.interface.characters
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [com.rpl.specter :as sp]
            [app.interface.utils :refer [associate-by get-with-id]]
            [app.interface.malli-schema-registry :refer [register!]]
            [clojure.set :refer [union]]
            [re-frame.core :as rf]))

(register! ::character-id :keyword)

(register! ::character
  [:map
   [:id ::character-id]
   [:full-name :string]
   [:image :string]
   [:class-id ::character-class-ids]
   ; Use ref here to avoid stack overflow, as it is a recursive
   ; definition.
   [:inventory {:default []}
    [:vector :app.interface.items/item]]
   [:inventory-space {:default 3}
    :int]
   [:injuries {:default 0}
    :int]
   [:vigor :int]
   [:traumas {:default 0}
    :int]
   [:will :int]
   [:is-dead {:default false}
    :boolean]
   [:next-ready-time {:default 0}
    :int]
   [:innate-abilities {:default #{:recover}}
    [:set :app.interface.abilities/ability]]
   [:innate-traits [:set :app.interface.traits/trait]]
   [:controlled-by-player? :boolean]
   [:faction :app.interface.factions/faction]])

(register! ::animation
  [:enum :attack :none])

(register! ::animation-data
  [:map
   [:frames :int]])

(register! ::character-class
  [:map
   [:id :keyword]
   [:animations 
    [:map-of ::animation ::animation-data]]])

; TODO automatically determine animation :frames based on the files in the
; resources/public/class-images/<class-name> directories
(def character-classes
  [{:id :skirmisher
    :animations 
    {:attack {:frames 5}}}
   {:id :scholar
    :animations 
    {:attack {:frames 2}}}])

; More sprites and animations can be found at
; https://github.com/wesnoth/wesnoth/tree/master/data/core/images/units

(register! ::character-class-ids
  (into [:enum] (map :id character-classes)))

(defn finalize-character
  [{:keys [class-id] :as character}]
  (as-> character c
    (assoc c :image (str "class-images/" (name class-id) "/idle.png"))
    (m/decode ::character c mt/default-value-transformer)
    (doto c #(m/validate ::character %))))

(def character-classes-by-id
  (associate-by :id character-classes))

(defn get-traits
  [{:keys [innate-traits inventory] :as _character}]
  (union innate-traits (apply union (map :traits inventory))))

(defn get-ability-ids
  [{:keys [innate-abilities inventory] :as _character}]
  (union innate-abilities
         (apply union (map :abilities inventory))))

(defn update-character-in-db
  [db character-id update-fn]
  (sp/transform [:characters sp/ALL #(= character-id (:id %))]
                update-fn
                db))

(rf/reg-event-db
  ::change-image
  (fn [db [_ character-id new-image]]
    (update-character-in-db db character-id #(assoc % :image new-image))))

(rf/reg-event-db
  ::increment-next-ready-time
  [rf/debug]
  (fn [db [_ character-id]]
    (update-character-in-db db character-id #(update % :next-ready-time + 5))))

(defn swap-elements
  [v e1 e2]
  (mapv (fn [e]
          (cond (= e e1) e2
                (= e e2) e1
                :else    e))
    v))

(rf/reg-event-db
  ::swap-items-in-inventory
  [rf/debug]
  (fn [db [_ character-id item1 item2]]
    (update-character-in-db
      db
      character-id
      (fn [character]
        (update character :inventory #(swap-elements % item1 item2))))))
    
