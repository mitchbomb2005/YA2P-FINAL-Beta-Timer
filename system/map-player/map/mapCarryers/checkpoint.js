'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 4708.866632044117 , -1543.832718679886 , 413 , 994.084975922992  )
        this.hitboxes[ 0 ] = new Hitbox( 1168.308412756166 , -772.5166034383647 , 98 , 28  )
        this.hitboxes[ 1 ] = new Hitbox( 1532.761257381898 , -768.35761642322 , 82.99999802808225 , 28.00000104819037  )
        this.hitboxes[ 2 ] = new Hitbox( 5500.481311262579 , -582.7023653053903 , 224.00034679814598 , 340  )
        this.hitboxes[6] = new Hitbox(7824.600652535286,-594.7523150074721,370.9999875076246,473.92704492161954 )
        this.hitboxes[3] = new Hitbox(6554.600640036759,-3115.8253071301892,394.02956252528475,226.461460671424 )
        this.hitboxes[4] = new Hitbox(6075.685039221042,-4782.825799599384,394.91572690753037,358.78818618766945 )
        this.hitboxes[5] = new Hitbox(6923.599944741716,-4797.825306210291,124.00069428279312,320.0006331007362 )
        
        this.hitboxes[6] = new Hitbox(10275.695525955325,-4300.286376317476,557.842769887031,472.77008544527234 )
        this.hitboxes[7] = new Hitbox(13067.538295509174,-5566.379948488491,155.9999999744432,512.0000000008877 )
        this.hitboxes[8] = new Hitbox(16189.539096611536,-7859.379947940197,137.99919899070846,176.00472183250167 )
        this.hitboxes[9] = new Hitbox(14805.538295619685,-10088.379898503495,227.00012839220835,226.05810475716498 )
        
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .1)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
