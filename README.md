# Draft Concept

To try: a "combat" system where your characters are actually merchants with a "gold" stat.  As they wander around the map they find/buy/sell resources and their gold changes accordingly.  When they run out of gold, they "die".

## The Map

The game takes place on a large interconnected graph map (like the path of exile
skill tree).
Each node is a location that contains enemies, items to acquire, shops, or other
points of interest.

```
                                         +-------------------+          
                                         |                   |          
                     +------------+      |   Plains          |          
+-------------+      |  Plains    |      |   Highland        |          
| Foliage     |      |  Rocky     +------+   Space for 2     |          
|             +------+            |      +-------------------+          
|             |      +------------+---+                                 
+-----------+-+                       |                                 
            |                    +----+------+                          
            |                    |           |                          
            |                    | Cliff     +--+                       
            |                    |           |  |                       
            |                    +-+---------+  +----------------------+
     +------+-----------+          |            |                      |
     |                  +----------+            |   Swamp              |
     |  River           |                       |   Space for 2        |
     |                  |                       |                      |
     +------------------+                       +----------------------+
```

Characters should roam around the map in predictable patterns, making it feel
alive.

On the map there should be objectives that the player is racing to against
enemies trying to destroy them.

Probably there should be a fog of war to avoid overwhelming the player.

## Game Flow

At the start of the game, you choose a location for your character to start.
Perhaps you will have multiple characters that start at different locations.

Then your character(s) automatically travel down their path in chunked "turns",
which are just bundles of actions (like move, attack, etc.).
Each turn fits roughly one attack and one move action, although more or less
could fit depending on the speed of the actions.
After each turn, you have a chance to interact with your character(s) in the following ways:

 - Tell them to prioritize moving to a specific adjacent node on their next turn
   (perhaps retreating from a fight).
 - Tell them to select a specific item from their current node, perhaps from
   several options.
 - Tell them to swap items or gold with an adjacent character (perhaps a
   merchant).

Once all the interactions are specified, the player will hit "next turn" to
advance the game.

## Technical Stuff

### Setup

Follow https://github.com/binaryage/cljs-devtools/blob/master/docs/installation.md

First, install dependencies:

    # Linuxbrew and clojure
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install clojure/tools/clojure

    yarn

Then, start up all the servers with:

    ./run.zsh

You might need to open ports 3000, 5000, and 9630 to connect from another
machine.
On linux with UFW you can do this with:

```
sudo ufw allow 3000
sudo ufw allow 5000
sudo ufw allow 9630
```

### Deployment

#### As a static web page (frontend only)

Use a "release" script like at
https://github.com/kovasap/reddit-tree/blob/main/release.bash.

#### On Raspberry Pi

```
curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt-get install nodejs
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
sudo apt install yarn
curl -O https://download.clojure.org/install/linux-install-1.11.1.1273.sh
chmod +x linux-install-1.11.1.1273.sh
sudo ./linux-install-1.11.1.1273.sh
sudo cp app.service /etc/systemd/system/
systemctl enable app.service
systemctl start app.service
# To read logs:
journalctl -u app.service
```

Set up port forwarding on router to forward ports 3000, 5000, 9630 to the
raspberry pi's IP address.

Set up duckdns to point to the IP at https://www.whatismyip.com/.

Now anyone can access the game at kovas.duckdns.org:3000!

See info about setting up a static domain name at
https://gist.github.com/taichikuji/6f4183c0af1f4a29e345b60910666468.

#### Individual Server Startup

You can start the frontend service with:

    clj -M:frontend

You find the application at http://localhost:8700.

Start the backend API with this alias:

    clj -M:api

Find the backend server's documentation at: http://localhost:3000
