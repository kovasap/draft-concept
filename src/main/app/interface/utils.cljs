(ns app.interface.utils
  (:require 
    [malli.core :as m]))

(defn only
  "Gives the sole element of a sequence"
  [x] {:pre [(nil? (next x))]} (first x))

(defn get-only
  [list-of-maps k v]
  (only (get (dissoc (group-by k list-of-maps) nil) v)))

(defn associate-by [f coll]
  "Like groupby, but the values are single items, not lists of all matching
  items.  Note that f must uniquely distinguish items!"
  (zipmap (map f coll) coll))


(def IdMap
  [:map [:id :keyword]])
  

(m/=> get-with-ids [:=> [:cat [:vector :keyword] [:set IdMap]]
                    [:set IdMap]])
(defn get-with-ids
  [ids my-set]
  (set (filter #(contains? ids (:id %)) my-set)))
