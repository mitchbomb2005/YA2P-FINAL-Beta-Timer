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

    constructor(x = 0, y = 0, width, height, hidden = false, extraInfoI = 0, extraInfoII = 0, labelI = "I", labelII = "II"){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hidden = hidden
        eval("var " + labelI + " = " + extraInfoI) // does this work at all? i found it here, https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/
    }

    draw(cameraX, cameraY, color) {
        if(!this.hidden && 
            this.x + this.width + cameraX > 0 &&
            this.x + cameraX < 1676 &&
            this.y + this.height + cameraY > 0 &&
            this.y + cameraY < 918
        ) {
            ctx.fillStyle = color;
            ctx.fillRect(cameraX + this.x, cameraY + this.y, this.width, this.height);
        }
    }
}