import { Map } from "./map.js"

import { GameDisplayer } from "../system/variousParts/GameDisplayer.js"
import { Player } from "../system/map-player/player/Player.js"
import { Enemy } from "../system/enemy/Enemy.js"
import { KeyManager } from "../system/variousParts/KeyMan.js"
import { Debug } from "../debug.js"
import { Camera } from "../system/map-player/player/Camera.js"
import { Edit } from "../system/map-player/map/otherParts/MapEditor.js"
import { Menu } from "../system/variousParts/menu/Menu.js"
import { Keys } from "../system/map-player/map/otherParts/Keys.js"
import { DrawUtils } from "../utils/DrawUtils.js"
import { Background } from "../system/map-player/map/mapCarryers/Background.js"

import { Hook } from "../system/map-player/player/hook.js"
import { Sword } from "../system/map-player/player/sword.js"

import { Storage } from "../storage/storage.js"
import { Sound as Audio } from "../system/map-player/map/otherParts/audio.js" //Checkpoint


export class Game{
    // System
    gameDisplayer;
    player;
    enemy;

    // fields

    
    
    keyManager = new KeyManager(this);
    debug = new Debug(this.keyManager, this);
    menu = new Menu(this)
    drawUtils = new DrawUtils()
    storage = new Storage(this)
    sword = new Sword(this)
    
    camera = new Camera(400, 300, this.debug, this.keyManager, this)
    mapEdit= new Edit(this.camera, this.keyManager, this.drawUtils, this)
    keys = new Keys(this.camera, this)
    Background = new Background(this.camera)
    audio = new Audio()
    main 
    
    
    constructor(tld) {
        this.player = new Player(-438, -509, 
            this.keyManager, 
            this.debug, 
            this.map, 
            this.camera, 
            this.deathMap, 
            this.checkpoint, 
            this.teleport,
            this
        );

        this.enemy = new Enemy(-438, -509, this);

        this.main = tld

        this.gameDisplayer = new GameDisplayer(
            this, 
            this.map, 
            this.camera, 
            this.player,
            this.debug, 
            this.deathMap, 
            this.Background, 
            this.checkpoint, 
            this.teleport,
        );


        

        
    }
    map = new Map(this);
    hook = new Hook(this)
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
}