'use strict';

import { Hitbox } from "../../Hitbox.js";

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

    layer1 = new Array
    layer2 = new Array
    camera

    constructor(cam) {
        this.createLayer1()
        this.camera = cam
    }

// base
// ctx.fillRect((x/1) + 0 , (y/2) + 0 , 0, 0);

    createLayer1() {
        this.layer1[0] = new Hitbox(150, 150, 50, 650)
        this.layer1[1] = new Hitbox(175, 450, 500, 40)
        this.layer1[2] = new Hitbox(670, 150, 50, 650)
        this.layer1[3] = new Hitbox(1000, 0, 950, 50)
        this.layer1[4] = new Hitbox(1900, 0, 50, 400)
        this.layer1[5] = new Hitbox(1900, 350, 650, 50)
        this.layer1[6] = new Hitbox(1000, -500, 50, 550)
        this.layer1[7] = new Hitbox(1700, -500, 50, 550)
        //this.layer1[0] = new Hitbox()
    }

    createLayer2() {
        
    }
    

    Draw(x, y) {
        for (let i = 0; i < this.layer1.length; i++) {
            this.layer1[i].draw(this.camera.x / 2, this.camera.y / 2, "#5f5f5f")
        }
        /*
        this.#DrawLayer2(x, y);
        this.#DrawLayer1(x, y);
        this.#DrawLayer0(x, y, 1, 1);
        */
    }

    #DrawLayer2(x, y, xOffset = 3, yOffset = 3) {
        ctx.fillStyle = "#7f7f7f";
        ctx.fillRect((x/xOffset) + 75 , (y/yOffset) + 150 , 60, 650);
        ctx.fillRect((x/xOffset) + 80 , (y/yOffset) + 350 , 580, 50);
        ctx.fillRect((x/xOffset) + 655 , (y/yOffset) + 0 , 60, 800);
        ctx.fillRect((x/xOffset) + 665 , (y/yOffset) + 440 , 380, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + -550 , 60, 1350);
        ctx.fillRect((x/xOffset) + 390 , (y/yOffset) + -50 , 660, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + 0 , 400, 60);
        ctx.fillRect((x/xOffset) + 990 , (y/yOffset) + 300 , 400, 60);
        ctx.fillRect((x/xOffset) + 1330 , (y/yOffset) + 0 , 60, 860);
    }

}