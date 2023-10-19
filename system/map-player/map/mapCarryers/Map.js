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
        this.hitboxes[2] = new Hitbox(-700, -400, 1000, 1411, false);
        
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
