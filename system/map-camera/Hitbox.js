'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Hitbox {
    // fields
    x;
    y;
    width;
    height;
    hidden

    constructor(x, y, width, height, hidden = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hidden = hidden
    }

    draw(cameraX, cameraY, color) {
        if(!this.hidden && 
            this.x + this.width > cameraX &&
            this.x + cameraX < 1676
            ) {
            ctx.fillStyle = color;
            ctx.fillRect(cameraX + this.x, cameraY + this.y, this.width, this.height);
        }
    }
}