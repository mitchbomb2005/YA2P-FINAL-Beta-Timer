'use strict';

import { Map } from "./system/map-camera/Map.js"
import { GameDisplayer } from "./system/GameDisplayer.js"
import { Camera } from "./system/map-camera/Camera.js"
import { KeyManager } from "./system/KeyMan.js"
import { Debug } from "./debug.js"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Main {

    // System
    gameDisplayer;

    // fields
    map = new Map();
    keyManager = new KeyManager();
    camera = new Camera(0, 0, this.keyManager);
    debug = new Debug(this.keyManager);

    constructor() {
        this.gameDisplayer = new GameDisplayer(this, this.map, this.camera, this.debug);
    }

    async startGame() {
        while (true) {
            this.updateGame();
            this.gameDisplayer.drawGameFrame();
            await sleep(1000/60);
        }
    } 

    updateGame() {

        // Update variables
        this.camera.update();
        this.debug.update();
        

        // Update input
        this.keyManager.update();
    }

}

var game = new Main();
game.startGame();