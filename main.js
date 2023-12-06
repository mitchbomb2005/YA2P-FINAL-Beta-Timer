'use strict';

import { Game } from "./imports/import.js"

class Main {

    game = new Game()

    async startGame() {
        if(localStorage) {this.game.storage.accessible = false} else {this.game.storage.accessible = true}
        this.game.storage.check()

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
            
            this.game.keys.drawKeys()
            if(this.game.menu.check) {
                this.updateGame();
            } else {
                this.game.menu.drawMenu()
                if(this.game.keyManager.wasKeyJustPressed("KeyW") && !this.game.menu.checkDos) {
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

        if(this.game.debug.mapBuilder){
            this.game.mapEdit.update();
        }


        this.game.hook.update();
        this.game.storage.update()

        if (this.game.keyManager.wasKeyJustPressed("KeyP") && this.game.menu.checkDos) {
            this.game.menu.fade("up")
        }
        

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