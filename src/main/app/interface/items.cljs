(ns app.interface.items)

(def Item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   [:damage :int]
   [:healing :int]
   [:speed :int]])

(def items
  [{:item-type :mace
    :display-name "Mace"
    :damage 1
    :healing 0
    :speed 5}])
