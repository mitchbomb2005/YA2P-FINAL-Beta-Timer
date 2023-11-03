'use strict';

// rename this to Player.js

export class Camera {

    x;
    y;
    debug;
    keyMan;
    mouseX
    mouseY
    mouseXSto
    mouseYSto

    constructor(x, y, debug, keyman) {
        this.x = x
        this.y = y
        this.debug = debug
        this.keyMan = keyman
    }

    update() {
        if (this.debug.freeCam) {
            this.freeCamMove()
        }
        if (this.keyMan.mouseX !== this.mouseXSto || this.keyMan.mouseY !== this.mouseYSto) {
            this.updateMouse()
        } 

    }


    updateMouse() {
        this.mouseXSto = this.keyMan.mouseX
        this.mouseYSto = this.keyMan.mouseY
        this.mouseX = this.mouseXSto - this.x
        this.mouseY = this.mouseYSto - this.y
    }

    freeCamMove() {}
}
