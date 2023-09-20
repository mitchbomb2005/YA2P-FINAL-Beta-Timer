const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { GameDisplayer } from "./system/GameDisplayer.js"
import { Player } from "./system/Player.js"
import { keyManager } from "./system/KeyMan.js"

'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



class Main {

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
            this.keyManager.doActionsFromKeyInput();
            this.keyManager.onTick();
            this.displayer.drawGameFrame();
            await sleep(1000/60)
            // Wait here
        }
    } 

    updateGame() {
        
    }

    

}

new Main();


var keyMan = new (keyManager);

document.addEventListener('keydown', (event) => {
    var code = event.code;
    keyMan.setKeyPressed(code, true)
  }, false);

document.addEventListener('keyup', (event) => {
    var code = event.code;
    keyMan.setKeyPressed(code, false)
}, false);