'use strict';

const canvas = document.getElementById("game_screen");

export class Camera {

    x;
    y;
    debug;
    keyMan;
    mouseX
    mouseY
    mousePos
    velX
    velY
    midX = canvas.offsetWidth / 2
    midY = canvas.offsetHeight / 2
    omidX = this.midX
    omidY = this.midY
    originalCanvas = canvas.getBoundingClientRect()
    zoom = 1
    game



    constructor(x, y, debug, keyman, game) {
        this.x = x
        this.y = y
        this.debug = debug
        this.keyMan = keyman
        this.game = game
        document.addEventListener('mousemove', evt => {
            this.mousePos = this.keyMan.getMousePos(canvas, evt)
    
          }, false)
    }

    update() {
        this.mouseX = 0 //-(this.mousePos.x - 1676/2)/3
        this.mouseY = 0 //-(this.mousePos.y - 918/2)/3

        if (this.debug.freeCam) {
            this.freeCamMove()
        } else {
            this.move()
        }
        if (this.keyMan.wasKeyJustPressed("Equal")) {
            this.Zoom("in")
        }
        if (this.keyMan.wasKeyJustPressed("Minus")) {
            this.Zoom("out")
        }
        this.keyMan.camY = this.y
        this.keyMan.camX = this.x

    }


    freeCamMove() {}

    move() {
        if(this.debug.cursorCamera) {
            this.velX = (((this.x - this.midX) - (this.game.player.x+this.mouseX))  /5) // 
            this.velY = (((this.y - this.midY) - (this.game.player.y+this.mouseY))  /5) //
        } else {
            this.velX = (((this.x - this.midX) - (this.game.player.x))  /5) //
            this.velY = (((this.y - this.midY) - (this.game.player.y))  /5) //
        }

        this.x -=  this.velX 
        this.y -=  this.velY 
    }

    Zoom(direction) {
        if (direction == "in") {
            this.zoom -= .1
        } else if (direction == "out") {
            this.zoom += .1
        }
        canvas.width = this.originalCanvas.width * this.zoom
        
        this.midX = this.omidX / (this.zoom)
        this.midY = this.omidY / (this.zoom)
             
    }
}
