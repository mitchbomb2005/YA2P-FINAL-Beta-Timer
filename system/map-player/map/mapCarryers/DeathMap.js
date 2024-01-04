'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 0 , 0 , 0 , 0 , false )
        this.hitboxes[ 0 ] = new Hitbox( 0.44844287297627 , -1645.8061077667423 , 1067.9830621358376 , 1131.2895043283756)
        this.hitboxes[ 1 ] = new Hitbox( 1712.3099806344521 , -2071.3188340224106 , 789.998596189017 , 1685.7963336967969)
        this.hitboxes[ 2 ] = new Hitbox( 2435.999481237835 , 794.587104879429 , 708.945562086707 , 625.2196281897802 , false ) 
        this.hitboxes[3] = new Hitbox(8417.619599709426,-1124.5687769644742,519.3592814371259,25.583606557377152 )
        this.hitboxes[4] = new Hitbox(8944.938027974107,-282.59785645518264,600.683618278128,130.92786885177588 )
        this.hitboxes[5] = new Hitbox(8404.219251042647,-1128.729003996167,60.215568861793145,908.9704053652115 )
        this.hitboxes[6] = new Hitbox(5649.164161222305,268.36706263308474,1786.135334913546,1265.4055727012435 )
        
        /**/
        
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
