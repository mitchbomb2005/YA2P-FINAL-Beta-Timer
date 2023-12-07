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
        this.hitboxes[6] = new Hitbox(7824.600652535286,-594.7523150074721,370.9999875076246,473.92704492161954 , true)
        this.hitboxes[3] = new Hitbox(6554.600640036759,-3115.8253071301892,394.02956252528475,226.461460671424, true )
        this.hitboxes[4] = new Hitbox(6075.685039221042,-4782.825799599384,394.91572690753037,358.78818618766945, true )
        this.hitboxes[5] = new Hitbox(6923.599944741716,-4797.825306210291,124.00069428279312,320.0006331007362, true )
        
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
