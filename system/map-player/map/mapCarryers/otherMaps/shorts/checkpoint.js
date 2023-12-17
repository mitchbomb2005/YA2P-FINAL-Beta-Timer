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
        this.hitboxes[5] = new Hitbox(120.61876704483791,-4816.314037493997,219.9470427657953,219.64592534962594 )
        this.hitboxes[6] = new Hitbox(476.93881170978034,-5711.739291123723,195.9634688937158,217.94394864725928 )
        this.hitboxes[7] = new Hitbox(458.5752744845504,-6575.322450969299,215.6420829997911,246.51902937669638 )
 
 
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
