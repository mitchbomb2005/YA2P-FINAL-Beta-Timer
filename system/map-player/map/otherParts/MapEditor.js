const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "../../Hitbox.js";

export class Edit {
    keyMan;
    camera;
    x;
    y;
    camXSet
    camYSet
    camXSetII
    camYSetII
    drawUtlils
    tempHitboxes = new Array()
    currentX = 0
    currentY = 0
    hitNum = 0
    layer = 0
    layerOffset
    canvasShape = canvas.getBoundingClientRect()

    constructor(c, k, d) {
        this.camera = c
        this.keyMan = k
        this.drawUtlils = d

        document.addEventListener("click", (event) => {
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = (((event.clientX / 1.0) - this.camera.x) - this.canvasShape.left) * this.layerOffset; 
            this.y = (((event.clientY / 1.0) - this.camera.y) - this.canvasShape.top) * this.layerOffset;
            this.camXSet = this.camera.x
            this.camYSet = this.camera.y
          }, false);

        onmousemove = (event) => {
            this.currentX = (((event.clientX / 1.0) - this.camera.x) - this.canvasShape.left) * this.layerOffset; 
            this.currentY = (((event.clientY / 1.0) - this.camera.y) - this.canvasShape.top) * this.layerOffset; 
            this.camXSetII = this.camera.x
            this.camYSetII = this.camera.y
        }
    }



    update() {
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("AltLeft")) {
            this.hitNum++
        }
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("ShiftLeft")) {
            for (let i = 0; i < this.hitNum; i++) {
                console.log(
                "this.hitboxes[", i ,"] = new Hitbox(",
                this.tempHitboxes[i].x,",",
                this.tempHitboxes[i].y,",",
                this.tempHitboxes[i].width, ",",
                this.tempHitboxes[i].height, ",",
                "false )"
                )
            }
        }
        if (this.keyMan.isKeyPressed("AltLeft") && this.keyMan.wasKeyJustPressed("KeyM")) {
            this.layer++
            if (this.layer == 3) {
                this.layer = 0
            }
        }
        this.tempHitboxes[this.hitNum] = new Hitbox( 
            (this.x / this.layerOffset),
            (this.y / this.layerOffset),
            ((this.currentX) / this.layerOffset),
            ((this.currentY) / this.layerOffset)
        )

        this.layerOffsetSet()
    }

    drawHitbox() {
        ctx.fillStyle = "#000000"
        for (let i = 0; i < this.hitNum + 1; i++) {
            this.tempHitboxes[i].draw(this.camera.x / this.layerOffset, this.camera.y / this.layerOffset) 

        }
        this.drawUtlils.Text(this.layer, 20, 100)

    }

    layerOffsetSet() {
        if (this.layer == 0) {
            this.layerOffset = 1
        } else if (this.layer == 1) {
            this.layerOffset = 2
        } else if (this.layer == 2) {
            this.layerOffset = 3
        }
    }

}
