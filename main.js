'use strict';

import { Map } from "./system/map-camera/Map.js"
import { Death as DeathMap } from "./system/map-camera/DeathMap.js"
import { GameDisplayer } from "./system/GameDisplayer.js"
import { Player } from "./system/map-camera/Player.js"
import { KeyManager } from "./system/KeyMan.js"
import { Debug } from "./debug.js"
import { Camera } from "./system/map-camera/Camera.js";
import { Edit } from "./system/MapEditor.js"



class Main {

    // System
    gameDisplayer;

    // fields
    map = new Map();
    deathMap = new DeathMap()
    keyManager = new KeyManager();
    debug = new Debug(this.keyManager);

    camera = new Camera(0, 2000, this.debug, this.keyManager)
    player = new Player(-838, -509, this.keyManager, this.debug, this.map, this.camera, this.deathMap);
    mapEdit= new Edit(this.camera, this.keyManager)

    constructor() {
        this.gameDisplayer = new GameDisplayer(this, this.map, this.camera, this.player, this.debug, this.deathMap);
    }

    async startGame() {
        //this.autoDebug()
        while (true) {
            //this.updateGame();
            this.gameDisplayer.drawGameFrame();
            if (this.debug.playerHitbox) {
                this.player.drawHitbox()
            }
            if (this.debug.mapBuilder) {
                this.mapEdit.drawHitbox()
            }
            this.updateGame();
            await this.sleep(1000/60);
        }
    } 

    updateGame() {

        // Update variables
        this.player.update();
        this.debug.update(); 
        this.camera.update();
        this.mapEdit.update()
        

        // Update input
        this.keyManager.update();
    }

    autoDebug() {
        this.debug.debugMode = true
        this.debug.bean = false
        this.debug.noClip = true
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

var game = new Main();
game.startGame();