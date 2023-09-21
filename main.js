'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Map } from "./system/map-camera/Map.js"
import { GameDisplayer } from "./system/GameDisplayer.js"
import { Camera } from "./system/map-camera/Camera.js"
import { KeyManager } from "./system/KeyMan.js"

'use strict';

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

    constructor() {
        this.gameDisplayer = new GameDisplayer(this, this.map, this.camera);
        this.startGame();
    }

    async startGame() {
        while (true) {
            this.updateGame();
            this.gameDisplayer.drawGameFrame();
            await sleep(1000/60)
            // console.log(this.camera.x, this.camera.y)            
           
            // Wait here
        }
    } 

    updateGame() {
        // Update input
        this.keyManager.update();

        // Update variables
        this.camera.update();
    }

}

new Main();