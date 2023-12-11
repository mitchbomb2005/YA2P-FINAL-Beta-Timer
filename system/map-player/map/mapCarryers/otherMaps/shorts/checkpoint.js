'use strict';

import { Hitbox } from "../../../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
