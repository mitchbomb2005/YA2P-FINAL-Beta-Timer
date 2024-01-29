'use strict';

import { Game } from "./imports/import.js"



    const game = new Game(this)
    const perfectFrameTime = 1000 / 60;
    let deltaTime = 0;
    let lastTimestamp = 0;

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
        
        if(game.debug.lag){await sleep(Math.random() * 100)}
        requestAnimationFrame(tick);

        //console.log("frame")


            var now = Date.now()
            deltaTime = (Date.now() - lastTimestamp) / perfectFrameTime;
            lastTimestamp = Date.now();
            
            game.gameDisplayer.drawGameFrame();
            if (game.debug.playerHitbox) {
                game.player.drawHitbox()
            }

            if (game.debug.mapBuilder) {
                game.mapEdit.drawHitbox()
            }
            var DrawTime = Date.now() - now
            var now = Date.now()
            if(game.menu.check) {
                updateGame();
            } else {
                game.menu.drawMenu()
                if(game.keyManager.wasKeyJustPressed("KeyW") && !game.menu.checkDos) {
                    game.menu.fade()
                }
            }/**/
            game.keyManager.update();
            console.log("Drawing :", DrawTime , "|||  Updating :", Date.now() - now, "|||  Max : 16 :", DrawTime + Date.now() - now, "|||  Delta Time :", deltaTime)
            //lastTime = Date.now()
            //await sleep(1000/60);
    }

    async function updateGame() { 
        

        // Update variables
        
        game.camera.update(deltaTime)
        game.player.update(deltaTime); //REAL
        for(let i = 0; i < game.enemy.value.length; i++) {
            game.enemy.value[i].update();
        
        }

        game.debug.update();

        if(game.debug.mapBuilder){
            game.mapEdit.update();
        }


        game.hook.update(deltaTime);
        game.storage.update()
        DeltaTime()

        if (game.keyManager.wasKeyJustPressed("KeyP") && game.menu.checkDos) {
            game.menu.fade("up")
        }
        
        
        // Update input
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function DeltaTime(){

        
        
    }

startGame();