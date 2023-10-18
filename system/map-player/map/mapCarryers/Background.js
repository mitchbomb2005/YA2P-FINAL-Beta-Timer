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
        this.createLayer2()
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
        this.layer2[0] = new Hitbox(75, 150, 60, 650)
        this.layer2[1] = new Hitbox(80, 350, 580, 50)
        this.layer2[2] = new Hitbox(655, 0, 60, 800)
        this.layer2[3] = new Hitbox(665, 440, 380, 60)
        this.layer2[4] = new Hitbox(990, -550, 60, 1350)
        this.layer2[5] = new Hitbox(390, -50, 660, 60)
        this.layer2[6] = new Hitbox(990, 0, 400, 60)
        this.layer2[7] = new Hitbox(990, 300, 400, 60)
        this.layer2[8] = new Hitbox(1330, 0, 60, 860)
        //this.layer2[0] = new Hitbox()
    }
    

    Draw() {
        for (let i = 0; i < this.layer2.length; i++) {
            this.layer2[i].draw(this.camera.x / 3, this.camera.y / 3, "#7f7f7f")
        }
        for (let i = 0; i < this.layer1.length; i++) {
            this.layer1[i].draw(this.camera.x / 2, this.camera.y / 2, "#5f5f5f")  
        }


    }

}