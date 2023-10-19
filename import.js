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
import { Background } from "./system/map-player/map/mapCarryers/Background.js"
import { Checkpoint } from "./system/map-player/map/mapCarryers/checkpoint.js"

export class Game{
    // System
    gameDisplayer;
    player;

    // fields
    map = new Map();
    deathMap = new DeathMap()
    keyManager = new KeyManager();
    debug = new Debug(this.keyManager);
    menu = new Menu()
    drawUtils = new DrawUtils()
    
    camera = new Camera(0, 2000, this.debug, this.keyManager)
    mapEdit= new Edit(this.camera, this.keyManager, this.drawUtils)
    keys = new Keys(this.camera)
    Background = new Background(this.camera)
    checkpoint = new Checkpoint()
    
    constructor() {
        this.player = new Player(-438, -509, this.keyManager, this.debug, this.map, this.camera, this.deathMap, this.checkpoint);
        this.gameDisplayer = new GameDisplayer(this, this.map, this.camera, this.player, this.debug, this.deathMap, this.Background, this.checkpoint);
    }
}