const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { Hitbox } from "../../Hitbox.js";

export class Edit {
    keyMan;
    camera;
    x;
    y;
    drawUtlils
    tempHitboxes = new Array()
    currentX = 0
    currentY = 0
    hitNum = 0
    layer = 0
    canvasShape = canvas.getBoundingClientRect()

    constructor(c, k, d) {
        this.camera = c
        this.keyMan = k
        this.drawUtlils = d

        document.addEventListener("click", (event) => {
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = ((event.clientX / 1.0) - this.camera.x) - this.canvasShape.left; 
            this.y = ((event.clientY / 1.0) - this.camera.y) - this.canvasShape.top; 
          }, false);

        onmousemove = (event) => {
            this.currentX = ((event.clientX / 1.0) - this.camera.x) - this.canvasShape.left; 
            this.currentY = ((event.clientY / 1.0) - this.camera.y) - this.canvasShape.top; 
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
                this.tempHitboxes[i].width - this.tempHitboxes[i].x, ",",
                this.tempHitboxes[i].height - this.tempHitboxes[i].y, ",",
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
            this.x, 
            this.y, 
            this.currentX, 
            this.currentY
        )
    }

    drawHitbox() {
        ctx.fillStyle = "#000000"
        for (let i = 0; i < this.hitNum + 1; i++) {
            ctx.fillRect(   
                this.tempHitboxes[i].x + this.camera.x, 
                this.tempHitboxes[i].y + this.camera.y, 
                this.tempHitboxes[i].width - this.tempHitboxes[i].x, 
                this.tempHitboxes[i].height - this.tempHitboxes[i].y
            )
            this.drawUtlils.Text(this.layer, 20, 100)
            //console.log(this.tempHitboxes[i])
        }

    }

}
