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
        this.hitboxes[2] = new Hitbox(468.66145324706906,-2214.1300066229464,196,313 )
        this.hitboxes[3] = new Hitbox(211.6614532470703,-3095.129991648917,154,137.0028842088077 )
        this.hitboxes[4] = new Hitbox(482.8102688467727,-3952.329403221487,186,196 )
 
 
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
