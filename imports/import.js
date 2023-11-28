import { Map } from "../system/map-player/map/mapCarryers/Map.js"
import { Death as DeathMap } from "../system/map-player/map/mapCarryers/DeathMap.js"
import { GameDisplayer } from "../system/variousParts/GameDisplayer.js"
import { Player } from "../system/map-player/player/Player.js"
import { KeyManager } from "../system/variousParts/KeyMan.js"
import { Debug } from "../debug.js"
import { Camera } from "../system/map-player/player/Camera.js"
import { Edit } from "../system/map-player/map/otherParts/MapEditor.js"
import { Menu } from "../system/variousParts/menu/Menu.js"
import { Keys } from "../system/map-player/map/otherParts/Keys.js"
import { DrawUtils } from "../utils/DrawUtils.js"
import { Background } from "../system/map-player/map/mapCarryers/Background.js"
import { Checkpoint } from "../system/map-player/map/mapCarryers/checkpoint.js"
import { Teleport } from "../system/map-player/map/mapCarryers/Teleport.js"
import { Hook } from "../system/map-player/player/hook.js"
import { Storage } from "../storage/storage.js"
import { Sound as Audio } from "../system/map-player/map/otherParts/audio.js"

export class Game{
    // System
    gameDisplayer;
    player;

    // fields
    map = new Map();
    deathMap = new DeathMap()
    teleport = new Teleport()
    keyManager = new KeyManager(this);
    debug = new Debug(this.keyManager);
    menu = new Menu(this)
    drawUtils = new DrawUtils()
    storage = new Storage(this)
    
    camera = new Camera(400, 300, this.debug, this.keyManager)
    mapEdit= new Edit(this.camera, this.keyManager, this.drawUtils)
    keys = new Keys(this.camera)
    Background = new Background(this.camera)
    checkpoint = new Checkpoint()
    audio = new Audio()
    
    
    constructor() {
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
    hook = new Hook(this)
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
}