const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "./map-camera/Hitbox.js";

export class Edit {

    debug;
    map;
    camera;
    x;
    y;
    drawn = new Array()
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
            this.x = ((event.clientX / 1.04) - this.camera.x) - canvasShape.left; 
            this.y = ((event.clientY / 1.04) - this.camera.y) - canvasShape.top; 
          }, false);

        onmousemove = (event) => {
            let canvasShape = canvas.getBoundingClientRect()
            this.currentX = ((event.clientX / 1.04) - this.camera.x) - canvasShape.left; 
            this.currentY = ((event.clientY / 1.04) - this.camera.y) - canvasShape.top; 
        }
    }



    update() {
        this.drawn[1] = new Hitbox(this.x, this.y, this.currentX + this.x, this.currentY + this.y)
        ctx.fillStyle = "#000000"
        ctx.fillRect(this.x + this.camera.x, this.y + this.camera.y, this.currentX - this.x, this.currentY - this.y)
        //ctx.fill()
    }

}