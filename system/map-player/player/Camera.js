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
        this.mouseX = -(this.mousePos.x - 1676/2)/3
        this.mouseY = -(this.mousePos.y - 918/2)/3

        if (this.debug.freeCam) {
            this.freeCamMove()
        } else {
            this.move()
        }
        this.keyMan.camY = this.y
        this.keyMan.camX = this.x

    }


    freeCamMove() {}z

    move() {
        this.velX = ((this.x - this.midX) - (this.game.player.x+this.mouseX))  /5
        this.x -=  this.velX
        this.velY = ((this.y - this.midY) - (this.game.player.y+this.mouseY))  /5
        this.y -=  this.velY
    }
}
