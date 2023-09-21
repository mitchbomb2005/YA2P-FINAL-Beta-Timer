'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Hitbox {
    // fields
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        ctx.fillStyle = color;
        ctx.fillRect(cameraX + this.x, cameraY + this.y, this.width, this.height);
    }
}