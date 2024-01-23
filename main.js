'use strict';

import { Game } from "./imports/import.js"



    const game = new Game(this)
    var currentTime = 1
    var deltaTime = 1
    var lastTime

    async function startGame() {
        if(localStorage) {game.storage.accessible = false} else {game.storage.accessible = true}
        game.storage.check()
        requestAnimationFrame(tick);

        //game.autoDebug()
        //while (true) {
            //game.updateGame();
            
        //}
    } 

    async function tick() {
        //currentTime = Date.now();
        requestAnimationFrame(tick);

        console.log("frame")

            
            
            game.gameDisplayer.drawGameFrame();
            if (game.debug.playerHitbox) {
                game.player.drawHitbox()
            }

            if (game.debug.mapBuilder) {
                game.mapEdit.drawHitbox()
            }
            
            game.keys.drawKeys()
            if(game.menu.check) {
                updateGame();
            } else {
                game.menu.drawMenu()
                if(game.keyManager.wasKeyJustPressed("KeyW") && !game.menu.checkDos) {
                    game.menu.fade()
                }
            }/**/
            game.keyManager.update();
            //lastTime = Date.now()
            //await sleep(1000/60);
    }

    function updateGame() { 
        

        // Update variables
        game.player.update();
        for(let i = 0; i < game.enemy.value.length; i++) {
            game.enemy.value[i].update();
        
        }

        game.debug.update(); 
        game.camera.update();

        if(game.debug.mapBuilder){
            game.mapEdit.update();
        }


        game.hook.update();
        game.storage.update()
        DeltaTime()

        if (game.keyManager.wasKeyJustPressed("KeyP") && game.menu.checkDos) {
            game.menu.fade("up")
        }
        
        deltaTime = (currentTime - lastTime)/20;
        

        // Update input
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function DeltaTime(){

        
        
    }

startGame();