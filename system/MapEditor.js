const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "./map-camera/Hitbox.js";

export class Edit {

    debug;
    map;
    camera;
    x;
    y;
    hitbox = new Array()
    currentX = 0
    currentY = 0

    constructor(d, m, c) {
        this.debug = d
        this.map = m
        this.camera = c

        document.addEventListener("click", (event) => {
            let canvasShape = canvas.getBoundingClientRect()
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = (event.clientX / 1.04) - canvasShape.left; 
            this.y = (event.clientY / 1.04) - canvasShape.top; 
          }, false);

        onmousemove = (event) => {
            let canvasShape = canvas.getBoundingClientRect()
            this.currentX = (event.clientX / 1.04) - canvasShape.left; 
            this.currentY = (event.clientY / 1.04) - canvasShape.top; 
        }
    }



    update() {
        this.hitbox[1] = new Hitbox(this.x, this.y, this.currentX + this.x, this.currentY + this.y)
        ctx.fillStyle = "#000000"
        ctx.fillRect(this.x, this.y, this.currentX - this.x, this.currentY - this.y)
        console.log(this.x, this.y, this.currentX, this.currentY)
        //ctx.fill()
    }

}