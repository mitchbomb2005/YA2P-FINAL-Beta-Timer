'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

// base
// ctx.fillRect((x/1) + 0 , (y/2) + 0 , 0, 0);

    Draw(x, y) {
        this.#DrawLayer2(x, y, 3);
        this.#DrawLayer1(x, y, 2);
        this.#DrawLayer0(x, y);
    }

    #DrawLayer0(x, y, xOffset = 1.05, yOffset = 1.05) {
        ctx.fillStyle = "#bfbfbf";
        //ctx.fillRect((x/xOffset) + 1476, (y / yOffset), 620, 700);
        //1696, 2096
    }

    #DrawLayer1(x, y, xOffset = 2, yOffset = 2) {
        ctx.fillStyle = "#5f5f5f";
        ctx.fillRect((x/xOffset) + 150, (y/yOffset) + 250, 50, 550);
        ctx.fillRect((x/xOffset) + 175, (y/yOffset) + 450, 500, 40);
        ctx.fillRect((x/xOffset) + 670, (y/yOffset) + 250, 50, 550);
        ctx.fillRect((x/xOffset) + 1000, (y/yOffset) + 0, 950, 50);
        ctx.fillRect((x/xOffset) + 1900, (y/yOffset) + 0, 50, 400);
        ctx.fillRect((x/xOffset) + 1900, (y/yOffset) + 350, 650, 50);
    }

    #DrawLayer2(x, y, xOffset = 3, yOffset = 3) {
        ctx.fillStyle = "#7f7f7f";
        ctx.fillRect((x/xOffset) + 75 , (y/yOffset) + 250 , 60, 550);
        ctx.fillRect((x/xOffset) + 80 , (y/yOffset) + 350 , 580, 50);
        ctx.fillRect((x/xOffset) + 655 , (y/yOffset) + 250 , 60, 550);
        ctx.fillRect((x/xOffset) + 665 , (y/yOffset) + 440 , 380, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + -250 , 60, 1050);
        ctx.fillRect((x/xOffset) + 590 , (y/yOffset) + -50 , 460, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + 0 , 400, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + 300 , 400, 60);
        ctx.fillRect((x/xOffset) + 1330 , (y/yOffset) + 0 , 60, 860);
    }

}