const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { GameDisplayer } from "./system/GameDisplayer.js"
import { Player } from "./system/Player.js"
import { keyManager } from "./system/KeyMan.js"
// import { keyManager } from "./system/KeyMan.js"

'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



class TestingStuff {

    // System
    displayer;

    // fields
    player = new Player(0, 0);
    keyManager = new (keyManager);

    constructor() {
        this.displayer = new GameDisplayer(this);
        this.startGame();
    }

    async startGame() {
        while (true) {
            this.updateGame();
            this.displayer.drawGameFrame();
            this.keyManager.doActionsFromKeyInput();
            this.keyManager.onTick();
            await sleep(1000/60)
            // Wait here
        }
    } 

    updateGame() {
        
    }

}

new TestingStuff();