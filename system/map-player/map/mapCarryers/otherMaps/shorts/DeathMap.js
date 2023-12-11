'use strict';

import { Hitbox } from "../../../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(154.8251637394651,-1082.0900028082506,315,108.9999993696722 )
        this.hitboxes[1] = new Hitbox(455.7857448512254,-1747.08983781897,234.00226014044785,397.27747539201323 )
        this.hitboxes[2] = new Hitbox(163.7857448512254,-2222.089969143326,221,308 )
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
