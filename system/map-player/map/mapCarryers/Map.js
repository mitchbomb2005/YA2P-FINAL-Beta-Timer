'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Map {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(-10, 561, 2096, 450, false); // base floor
        this.hitboxes[1] = new Hitbox(-610, -2200, 2296, 2400, false); // base roof
        //this.hitboxes[2] = new Hitbox(-700, -400, 1000, 1411, false);
        this.hitboxes[ 3 ] = new Hitbox( 2008.9999999999964 , 193.97764669075622 , 609 , 815.9998532503878 , false )
        this.hitboxes[ 4 ] = new Hitbox( 2993.0024418611138 , 233.47749999999962 , 181 , 57 , false )
        this.hitboxes[ 2 ] = new Hitbox( 3756.0024418375065 , 194.47749999999968 , 932.0000000236037 , 823.9999037479197 , false )
        
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
