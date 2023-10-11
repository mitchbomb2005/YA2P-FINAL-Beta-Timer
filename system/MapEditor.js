const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "./map-camera/Hitbox.js";

export class Edit {
    keyMan;
    camera;
    x;
    y;
    drawn = new Array()
    currentX = 0
    currentY = 0
    hitNum = 1

    constructor(c, k) {
        this.camera = c
        this.keyMan = k

        document.addEventListener("click", (event) => {
            let canvasShape = canvas.getBoundingClientRect()
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = ((event.clientX / 1.0) - this.camera.x) - canvasShape.left; 
            this.y = ((event.clientY / 1.0) - this.camera.y) - canvasShape.top; 
          }, false);

        onmousemove = (event) => {
            let canvasShape = canvas.getBoundingClientRect()
            this.currentX = ((event.clientX / 1.0) - this.camera.x) - canvasShape.left; 
            this.currentY = ((event.clientY / 1.0) - this.camera.y) - canvasShape.top; 
        }
    }



    update() {
        this.drawn[this.hitNum] = new Hitbox( this.x + this.camera.x, 
                                    this.y + this.camera.y, 
                                    this.currentX - this.x, 
                                    this.currentY - this.y)
    }

    drawHitbox() {
        ctx.fillStyle = "#000000"
        for (let i; i < 1 + this.hitNum; i++) {
            ctx.fillRect(   this.drawn[i].x, 
                            this.drawn[i].y, 
                            this.drawn[i].width, 
                            this.drawn[i].height)
        }
    }

}