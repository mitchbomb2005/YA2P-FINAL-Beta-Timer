'use strict';

import { Hitbox } from "../../../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        
        this.hitboxes[0] = new Hitbox(468.14881559970235,-358.1712147705048,185.99995098218966,147.99999999967895 )
        this.hitboxes[1] = new Hitbox(178.14881559970158,-1283.0899691403042,153.99999999998673,198.00001292616616 )
 
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
