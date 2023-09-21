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
        this.hitboxes[0] = new Hitbox(-10, 561, 1696, 1000);
        this.hitboxes[1] = new Hitbox(-10, 0, 1696, 300);
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {

        /*ctx.fillStyle = color;
        ctx.fillRect(cameraX - 10, cameraY + 561, 1696, 1000);
        ctx.fillRect(cameraX - 10, cameraY + 0, 1696, 300);*/
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY);
        }

    }
}