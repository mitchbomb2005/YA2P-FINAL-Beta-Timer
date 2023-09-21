'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

// base
// ctx.fillRect((x/1) + 0 , (y/2) + 0 , 0, 0);

    Draw(x, y) {
        this.#DrawLayer2(x, y);
        this.#DrawLayer1(x, y);
    }

    #DrawLayer1(x, y) {
        ctx.fillStyle = "#5f5f5f";
        ctx.fillRect((x/2) + 100, (y/2) + 250, 50, 550);
        ctx.fillRect((x/2) + 125, (y/2) + 450, 550, 40);
        ctx.fillRect((x/2) + 670, (y/2) + 250, 50, 550);
    }

    #DrawLayer2(x,y) {
        ctx.fillStyle = "#7f7f7f";
        ctx.fillRect((x/3) + 75 , (y/3) + 250 , 60, 550);
        ctx.fillRect((x/3) + 80 , (y/3) + 350 , 580, 50);
        ctx.fillRect((x/3) + 655 , (y/3) + 250 , 60, 550);
        ctx.fillRect((x/3) + 665 , (y/3) + 440 , 380, 60);
        ctx.fillRect((x/3) + 990 , (y/3) + 250 , 60, 550);
    }

}