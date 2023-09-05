const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { GameDisplayer } from "./system/GameDisplayer.js"

'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const originalWidth = canvas.width;
const originalHeight = canvas.height;
var scaleX = 0;
var scaleY = 0;

class TestingStuff {

    // System
    displayer;

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