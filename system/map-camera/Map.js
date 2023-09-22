'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "./Hitbox.js";

export class Map {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(-10, 561, 2096, 400);
        this.hitboxes[1] = new Hitbox(-10, -400, 1696, 700);
        this.hitboxes[2] = new Hitbox(-10, 561, 1696, 300);
        this.hitboxes[3] = new Hitbox(2085, -50, 100, 1000);
        this.hitboxes[4] = new Hitbox(-700, -400, 1000, 1360);
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY);
        }

    }
}
