'use strict';

import { Game } from "./imports/import.js"

class Main {

    game = new Game()

    async startGame() {
        //this.game.autoDebug()
        while (true) {
            //this.game.updateGame();
            
            this.game.gameDisplayer.drawGameFrame();
            if (this.game.debug.playerHitbox) {
                this.game.player.drawHitbox()
            }

            if (this.game.debug.mapBuilder) {
                this.game.mapEdit.drawHitbox()
            }

           // if(this.game.menu.check) {
                this.game.keys.drawKeys()
                this.updateGame();
            /*} else {
                this.game.menu.drawMenu()
                if(this.game.keyManager.wasKeyJustPressed("KeyW")) {
                    this.game.menu.fade()
                }
            }/**/
            this.game.keyManager.update();
            await this.sleep(1000/60);
        }
    } 

    updateGame() {

        // Update variables
        this.game.player.update();
        this.game.debug.update(); 
        this.game.camera.update();
        this.game.mapEdit.update();
        this.game.hook.update();
        

        // Update input
    }

    autoDebug() {
        this.game.debug.debugMode = true
        this.game.debug.bean = false
        this.game.debug.noClip = true
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

var game = new Main();

game.startGame();