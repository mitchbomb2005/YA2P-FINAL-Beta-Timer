'use strict';

import { Hitbox } from "../../../../Hitbox.js";
import { DrawUtils } from "../../../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[0] = new Hitbox(181.99999999999977,463.95499719175035,468,58.00000000000006 )
        
 

    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
