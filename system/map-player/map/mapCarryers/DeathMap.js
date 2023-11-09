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
        this.hitboxes[ 0 ] = new Hitbox( 133.44844287297627 , -1645.8061077667423 , 937.9830621358376 , 1131.2895043283756 , false )
        this.hitboxes[ 1 ] = new Hitbox( 1712.3099806344521 , -1571.3188340224106 , 789.998596189017 , 1185.7963336967969 , false )
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
