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
    hitNum = 0

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
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("AltLeft")) {
            this.hitNum++
        }
        this.drawn[this.hitNum] = new Hitbox( this.x, 
                                    this.y, 
                                    this.currentX, 
                                    this.currentY)
    }

    drawHitbox() {
        ctx.fillStyle = "#000000"
        for (let i = 0; i < this.hitNum + 1; i++) {
            //if (this.drawn[i].x = undefined) {
                //this.drawn[this.hitNum] = new Hitbox( 0, 0, 0, 0)
            //}
            ctx.fillRect(   this.drawn[i].x + this.camera.x, 
                            this.drawn[i].y + this.camera.y, 
                            this.drawn[i].width - this.drawn[i].x, 
                            this.drawn[i].height - this.drawn[i].y
                        )
            console.log(this.drawn[i])
        }
    }

}
