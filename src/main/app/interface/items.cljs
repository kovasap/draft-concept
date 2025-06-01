(ns app.interface.items
  (:require [com.rpl.specter :as sp]
            [malli.core :as m]
            [app.interface.world-map :refer [EmbeddedWorldMap get-location]]
            [app.interface.characters
             :refer
             [CharacterId Character Animations are-enemies?]]))

; --- Character Transformers ---

; These are structured as they are to:
; 1. Make it easy to reuse them.
; 2. Make it possible to generate descriptive strings for them in the UI.
; 3. Make it easier to modify them (e.g. make a weapon do more damage).

(def TransformerParams
  [:map])

(def TargetTransformer
  [:=> [:cat Character TransformerParams] Character])

(m/=> do-damage TargetTransformer)
(defn do-damage
  [character {:keys [damage]}]
  (update character :vigor #(- % damage)))
  
; --- End Transformers ---

; --- Character Selectors ---

(defn TargetSelector
  [:=> [:cat EmbeddedWorldMap CharacterId]
   [:set CharacterId]])

(m/=> get-single-melee-target TargetSelector)
(defn get-single-melee-target
  [embedded-map character-id]
  (let [location (get-location embedded-map character-id)
        characters (:characters location)
        character (sp/select-one #(= character-id (:id %)) characters)
        potential-targets (sp/select #(and (are-enemies? character %)
                                           (not (:is-dead %)))
                                     characters)]
    (if (empty? potential-targets)
      #{}
      ; Select target arbitrarily from options for now
      #{(:id (first potential-targets))})))

; --- End Selectors ---

(def Effect
  [:map 
   ; Used to select which characters this effect will apply to.
   [:target-selector TargetSelector]
   ; Modifies targets when this effect occurs (e.g. does damage).
   [:target-transformer TargetTransformer]
   [:animation Animations]])

(def Item
  [:map
   [:item-type :keyword]
   [:display-name :string]
   ; Effects will happen in the order specified here when a character uses the
   ; item.
   [:effects [:vector Effect]]
   [:recovery-time :int]])

(def items
  [{:item-type :mace
    :display-name "Mace"
    :effects [{:target-selector get-single-melee-target
               :transformer-options {:damage 2}
               :target-transformer do-damage}] 
    :recovery-time 5}
   ; TODO finish this item, which allows characters to move
   {:item-type :boots}])

(defn is-usable?
  [embedded-map {:keys [effects] :as item} character-id]
  (some #(not (empty? %)) 
        (for [{:keys [target-selector]} effects]
           (target-selector embedded-map character-id))))

   
