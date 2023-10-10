'use strict';

import { Hitbox } from "./Hitbox.js";

export class Map {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(-10, 561, 2096, 450); // base floor
        this.hitboxes[1] = new Hitbox(-10, -2200, 1696, 2400); // base roof
        this.hitboxes[2] = new Hitbox(2085, -50, 2000, 1061); //
        this.hitboxes[3] = new Hitbox(-700, -400, 1000, 1411);
        this.hitboxes[4] = new Hitbox(1885, 200, 205, 80);
        this.hitboxes[5] = new Hitbox(2000, -1100, 696, 200);
        this.hitboxes[6] = new Hitbox(2300, -1300, 395, 201)
        this.hitboxes[7] = new Hitbox(1300, -900, 395, 201)
        this.hitboxes[8] = new Hitbox(1300, -1900, 395, 201)
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY);
        }

    }
}
