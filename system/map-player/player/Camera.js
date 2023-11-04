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
        this.keyMan.camY = this.y
        this.keyMan.camX = this.x

    }


    freeCamMove() {}
}
