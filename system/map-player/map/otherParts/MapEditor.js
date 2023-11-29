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
    game
    total// = this.game.map.hitboxes.length
    

    constructor(c, k, d, g) {
        this.camera = c
        this.keyMan = k
        this.drawUtlils = d
        this.game = g
        this.total = this.game.map.hitboxes.length

        document.addEventListener("click", (event) => {
            //this.x = event.clientX;
            //this.y = event.clientY;
            this.x = (((event.clientX / 1.0) - (this.camera.x / this.layerOffset)) - this.canvasShape.left) //* this.layerOffset; 
            this.y = (((event.clientY / 1.0) - (this.camera.y / this.layerOffset)) - this.canvasShape.top) //* this.layerOffset;
            this.camXSet = this.camera.x
            this.camYSet = this.camera.y
          }, false);

        onmousemove = (event) => {
            this.currentX = (((event.clientX / 1.0) - (this.camera.x / this.layerOffset)) - this.canvasShape.left) //* this.layerOffset; 
            this.currentY = (((event.clientY / 1.0) - (this.camera.y / this.layerOffset)) - this.canvasShape.top) //* this.layerOffset; 
            this.camXSetII = this.camera.x
            this.camYSetII = this.camera.y
        }
    }



    update() {
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("AltLeft")) {
            this.fix(this.hitNum)
            this.hitNum++
        }
        if (this.keyMan.wasKeyJustPressed("KeyS") && this.keyMan.isKeyPressed("ShiftLeft")) {
            for (let i = 0; i < this.hitNum; i++) {
                console.log(
                "this.hitboxes[", this.total ,"] = new Hitbox(",
                this.tempHitboxes[i].x,",",
                this.tempHitboxes[i].y,",",
                this.tempHitboxes[i].width, ",",
                this.tempHitboxes[i].height, ",",
                "false )"
                )
                this.addToMap(i)
                this.total++
                
            }
            this.tempHitboxes.splice(0, this.hitNum)
            this.hitNum = 0

        }
        if (this.keyMan.isKeyPressed("AltLeft") && this.keyMan.wasKeyJustPressed("KeyM")) {
            this.layer++
            if (this.layer == 3) {
                this.layer = 0
            }
        }
        this.tempHitboxes[this.hitNum] = new Hitbox( 
            (this.x),
            (this.y),
            ((this.currentX)) - this.x,
            ((this.currentY)) - this.y
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

    addToMap(Q){ //this.game.map.hitboxes.length
        this.game.map.hitboxes[this.game.map.hitboxes.length] = new Hitbox(
            this.tempHitboxes[Q].x,
            this.tempHitboxes[Q].y,
            this.tempHitboxes[Q].width,
            this.tempHitboxes[Q].height
            )
    }

    fix(hitnum) {
        if (this.tempHitboxes[hitnum].width < 0) {
            this.tempHitboxes[hitnum].x += this.tempHitboxes[hitnum].width
            this.tempHitboxes[hitnum].width = -this.tempHitboxes[hitnum].width 
        }
        if (this.tempHitboxes[hitnum].height < 0) {
            this.tempHitboxes[hitnum].y += this.tempHitboxes[hitnum].height
            this.tempHitboxes[hitnum].height = -this.tempHitboxes[hitnum].height
        }
    }

}
