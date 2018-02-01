# SQUASH GAME - P5.js

Playable demo: [Squash Game](http://squash-game.surge.sh/) on Surge

### Tech Stack:
* Javascript (ES6, native, non-transpiled)
* P5.js canvas library
* live-server for development

### Keybinds:
* W - Paddle Up
* S - Paddle Down
* P - Pause Game
* Space - Start

### Development:
`yarn` to install dependencies  
`yarn dev` to run the development environment

### Production:
Open `index.html`

Runs natively on modern browsers that support ES6 syntax.  
Defaults to 60FPS refresh rate.

### Features:
* Red Wall Of Doom that slowly moves towards and is limited to middle of the screen reducing the available reaction time
* Ball speed is equal to base value plus fraction of score points and max speed is limited

### TODO:
* UI scaling for different sized devices
* Implement xUnit, yUnit relative to window size
* Fix window resize
* Graphical improvements
* Improve ball Y direction
* Delay before spawning new ball
* Add mobile support