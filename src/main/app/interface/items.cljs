(ns app.interface.items)

(def Item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   [:damage :int]
   [:healing :int]
   [:speed :int]])
