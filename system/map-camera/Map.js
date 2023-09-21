'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Map {

    draw(x, y, color = "#0f0f0f") {

        ctx.fillStyle = color;
        ctx.fillRect(x - 10, y + 561, 1696, 1000);
        ctx.fillRect(x - 10, y + 0, 1696, 300);
        
    }
}