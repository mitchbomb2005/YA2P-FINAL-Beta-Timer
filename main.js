const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { GameDisplayer } from "./system/GameDisplayer.js"
import { Player } from "./system/Player.js"

'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



class TestingStuff {

    // System
    displayer;

    // fields
    player = new Player(0, 0);

    constructor() {
        this.displayer = new GameDisplayer(this);
        this.startGame();
    }

    async startGame() {
        while (true) {
            this.updateGame();
            this.displayer.drawGameFrame();
            await sleep(1000/60)
            // Wait here
        }
    } 

    updateGame() {
        
    }

}

new TestingStuff();