(ns app.interface.items
  (:require [app.interface.malli-schema-registry :refer [register!]]
            [com.rpl.specter :as sp]))



(register! ::item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   [:image :string]
   ; Abilities this item grants the wielding character.
   [:abilities [:set :app.interface.abilities/ability]]
   [:traits {:default #{}}
    [:set :app.interface.traits/trait]]
   [:recovery-time :int]])

(def items
  [{:item-type :mace
    :display-name "Mace"
    :image "item-images/mace.png"
    :abilties #{:melee-attack}
    :traits #{:armor-penetrating :heavy}}
   {:item-type :boots
    :display-name "Boots"
    :image "item-images/torch.png"
    :abilities #{:move}
    :traits #{:light}}])

(defn new-item
  [item-type]
  (sp/select-one [sp/ALL #(= item-type (:item-type %))] items))
