import { GameDisplayer } from ".\\system\\GameDisplayer.js"

'use strict';

new TestingStuff();

class TestingStuff {

    displayer;

    constructor() {
        this.displayer = new GameDisplayer(this);
        this.startGame();
    }

    startGame() {
        this.displayer.drawGameFrame();
    }

}