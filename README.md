# Draft Concept

## Game Flow

Every month, your party of adventurers is trying to take on a new challenging
locale.
They have the month to prepare, which consists of 4 weeks.

### Preparation

Each week, you choose a specific place in the area to explore.
Each place generally gives you a draft from a deck, which could contain new
characters, or items for characters to equip.

### Characters

Each character has affinity stats (like
https://github.com/kovasap/tactics/blob/main/DESIGN.md#character-development-and-classes),
and several inventory slots which can be filled with items.

### Challenge

At the start of the month, the challenge is revealed.
It consists of one or more "maps" that are made up of interconnected "slots"
that characters or enemies or environmental elements can be found in.

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

At the start of the challenge, the player will set up their character's loadouts
and initial positions, then watch as an automatic battle plays out.
If a character or enemy is ever defeated on the map, other characters will move
to take their place if possible.
Characters can only target other characters connected to their own node.

The challenge processes in turns/ticks, with faster characters acting earlier in
the turn order.

## Technical Stuff

### Setup

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
