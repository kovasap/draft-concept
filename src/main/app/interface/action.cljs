(ns app.interface.action
  (:require
    [app.interface.abilities :refer [is-usable?]]
    [app.interface.utils :refer [get-with-id]]
    [day8.re-frame.undo :as undo :refer [undoable]]  
    [app.interface.characters :refer [get-ability-ids]]
    [com.rpl.specter :as sp]
    [re-frame.core :as rf]))
    
(rf/reg-event-db
  ::advance-acting-character
  [rf/debug]
  (fn [{:keys [characters] :as db} _]
    (assoc db
      :acting-character-id (:id (first (sort-by :next-ready-time
                                                characters))))))

(rf/reg-event-fx
  ::take-next-action
  [rf/debug (undoable "Take next action")]
  (fn [{{:keys [characters acting-character-id] :as db} :db :as _cofx} _]
    {:fx (mapv (fn [event] [:dispatch event])
           [[:app.interface.abilities/use-ability
             acting-character-id
             ; just choose an arbitrary usable ability for now
             ; at the very least the :recover ability should be usable
             (first (filter #(is-usable? % db)
                      (get-ability-ids (get-with-id acting-character-id
                                                    characters))))]
            [::advance-acting-character]])}))
