'use strict';

import { Hitbox } from "./Hitbox.js";

export class Map {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(-10, 561, 2096, 450, false); // base floor
        this.hitboxes[1] = new Hitbox(-10, -2200, 1696, 2400, false); // base roof
        this.hitboxes[2] = new Hitbox(2074, -49, 788, 1240, false)
        this.hitboxes[3] = new Hitbox(-700, -400, 1000, 1411, false);
        this.hitboxes[4] = new Hitbox(1885, 200, 205, 80, false);
        this.hitboxes[5] = new Hitbox(2000, -1100, 696, 200, false);
        this.hitboxes[6] = new Hitbox(2152, -1258, 662, 476, false)
        this.hitboxes[7] = new Hitbox(1300, -900, 395, 201, false)
        this.hitboxes[8] = new Hitbox(1300, -1900, 395, 201, false)
        this.hitboxes[9] = new Hitbox(2242, -867, 487, 924, false)
        this.hitboxes[10] = new Hitbox(1323, -2208, 2143, 679, false)
        this.hitboxes[11] = new Hitbox(2933, -1250, 275 , 75, false)
        this.hitboxes[12] = new Hitbox(3418, -1239, 217, 74, false)

        // room beyond death

        this.hitboxes[ 13 ] = new Hitbox( 5110, 5, 1787, 994, false )
        this.hitboxes[ 14 ] = new Hitbox( 7135, 244, -1057, -937, false )
        this.hitboxes[ 15 ] = new Hitbox( 5110, -550, 2046, -300, false )
        this.hitboxes[ 16 ] = new Hitbox( 5110, -851, 81 , 533, false )

    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
