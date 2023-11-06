'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[ 0 ] = new Hitbox( 2587.185250268402 , 271.47764669075593 , 1189.9999999964243 , 746.4774999989917 , false )
        this.hitboxes[ 1 ] = new Hitbox( -1378.9984923976906 , 617.5 , 413.99999999121405 , 624 , false )
        this.hitboxes[ 2 ] = new Hitbox( 5349.081798605698 , -229.1137617393214 , 1231.0003357242658 , 901.5521015310786 , false )
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
