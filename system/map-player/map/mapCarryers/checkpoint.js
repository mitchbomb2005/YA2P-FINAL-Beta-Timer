'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 4708.866632044117 , -1543.832718679886 , 413 , 994.084975922992 , true )
        this.hitboxes[ 0 ] = new Hitbox( 1168.308412756166 , -772.5166034383647 , 98 , 28 , true )
        this.hitboxes[ 1 ] = new Hitbox( 1532.761257381898 , -768.35761642322 , 82.99999802808225 , 28.00000104819037 , true )
        this.hitboxes[ 2 ] = new Hitbox( 5500.481311262579 , -582.7023653053903 , 224.00034679814598 , 340 , true )
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
