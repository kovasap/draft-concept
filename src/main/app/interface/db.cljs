(ns app.interface.db
  (:require [app.interface.malli-utils :refer [cast-all cast]]
            [app.interface.items :refer [new-item]]
            [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.world-map :refer [default-world-map]]
            [re-frame.core :as rf]))

(register! ::db
  [:map
   [:message {:default ""}
    :string]
   [:log [:vector :string]]
   ; Use refs here to avoid stack overflow, as it is a recursive
   ; definition.
   [:world-map [:ref :app.interface.world-map/world-map]]
   [:acting-character-id [:ref :app.interface.characters/character-id]]
   [:inventories [:set [:ref :app.interface.items/inventory]]]
   [:current-drag
    [:map
     [:item {:default nil}
      [:maybe :app.interface.items/item]]
     [:inventory-id {:default nil}
      [:maybe :app.interface.items/inventory-id]]]]
   [:characters [:set [:ref :app.interface.characters/character]]]])

(def initial-db
  (cast ::db
        {:world-map   (default-world-map)
         :log         ["first message"]
         :acting-character-id :hare
         :inventories #{{:id       :hare-inventory
                         :contents [(new-item :mace) (new-item :boots) nil]}
                        {:id       :tortoise-inventory
                         :contents [(new-item :boots) nil nil]}
                        {:id       :clearing-inventory
                         :contents [nil (new-item :boots)]}}
         :characters  (cast-all :app.interface.characters/character
                                #{{:full-name    "Hare"
                                   :id           :hare
                                   :vigor        3
                                   :will         2
                                   :inventory-id :hare-inventory
                                   :class-id     :skirmisher
                                   :faction      :player
                                   :controlled-by-player? true}
                                  {:full-name    "Tortoise"
                                   :id           :tortoise
                                   :vigor        5
                                   :will         5
                                   :inventory-id :tortoise-inventory
                                   :faction      :bandits
                                   :class-id     :skirmisher
                                   :controlled-by-player? false}})}))

; Nice way to generate subsciptions for many keys.
(doseq [kw [:world-map :player-characters :characters :message :log :inventories]]
  (rf/reg-sub
    kw
    (fn [db _] (kw db))))
