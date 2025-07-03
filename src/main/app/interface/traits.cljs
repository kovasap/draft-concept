(ns app.interface.traits
  (:require [com.rpl.specter :as sp]
            [malli.core :as m]
            [app.interface.world-map :refer [get-location]]
            [app.interface.factions :refer [are-enemies?]]
            [app.interface.malli-schema-registry :refer [register!]]
            [app.interface.utils :refer [get-with-id]]
            [app.interface.messages-to-player :refer [append-log]]))


(register! ::trait [:enum :aquatic :sword :lance :axe])

(defn calc-melee-damage
  [attacker defender]
  2)

(defn calc-recovery-time
  [character]
  5)
