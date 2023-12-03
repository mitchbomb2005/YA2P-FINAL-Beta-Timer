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
        this.hitboxes[ 3 ] = new Hitbox( 5929.59547960569 , 174.29698143480516 , 1832.3937943238943 , 935.9594929404185 , false )
        //this.hitboxes[ 3 ] = new Hitbox( -1201.0548393697882 , -2480.9417804490217 , 1209.9998826938306 , 1883.6393987170195 , false )
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
