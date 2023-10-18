'use strict';

import { Map } from "./system/map-player/map/mapCarryers/Map.js"
import { Death as DeathMap } from "./system/map-player/map/mapCarryers/DeathMap.js"
import { GameDisplayer } from "./system/variousParts/GameDisplayer.js"
import { Player } from "./system/map-player/player/Player.js"
import { KeyManager } from "./system/variousParts/KeyMan.js"
import { Debug } from "./debug.js"
import { Camera } from "./system/map-player/player/Camera.js"
import { Edit } from "./system/map-player/map/otherParts/MapEditor.js"
import { Menu } from "./system/variousParts/Menu.js"
import { Keys } from "./system/map-player/map/otherParts/Keys.js"
import { DrawUtils } from "./utils/DrawUtils.js"

class Main {

    // System
    gameDisplayer;

    // fields
    map = new Map();
    deathMap = new DeathMap()
    keyManager = new KeyManager();
    debug = new Debug(this.keyManager);
    menu = new Menu()
    drawUtils = new DrawUtils()

    camera = new Camera(0, 2000, this.debug, this.keyManager)
    player = new Player(-438, -509, this.keyManager, this.debug, this.map, this.camera, this.deathMap);
    mapEdit= new Edit(this.camera, this.keyManager, this.drawUtils)
    keys = new Keys(this.camera)

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

            if(this.menu.check) {
                this.keys.drawKeys()
                this.updateGame();
            } else {
                this.menu.drawMenu()
                if(this.keyManager.wasKeyJustPressed("KeyW")) {
                    this.menu.fade()
                }
            }
            this.keyManager.update();
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