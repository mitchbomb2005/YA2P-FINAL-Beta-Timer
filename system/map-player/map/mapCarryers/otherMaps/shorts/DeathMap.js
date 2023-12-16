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
        this.hitboxes[3] = new Hitbox(138.34369699707077,-3113.130006622946,97,56 )
        this.hitboxes[4] = new Hitbox(600.3436969970708,-2466.13000662295,100,61.99997892040983 )
        this.hitboxes[5] = new Hitbox(278.34369699707094,-2733.130006622951,236.00000000000006,54 )
        this.hitboxes[6] = new Hitbox(376.3436969970716,-2829.130006622952,41.00000000000006,253 )
        this.hitboxes[7] = new Hitbox(105.66145324707048,-3504.130006622944,392.0000005133906,46.00009970799829 )
        this.hitboxes[8] = new Hitbox(379.66145324551053,-3784.130006622693,110.00000000155978,29.00000170097337 )
        this.hitboxes[9] = new Hitbox(629.6614532470703,-4818.130006622942,58,595 )
        this.hitboxes[10] = new Hitbox(91.66145324707031,-4738.130006622942,113,705 )
        
        
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
