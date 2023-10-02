'use strict';

// rename this to Player.js

export class Camera {

    x;
    y;
    debug;
    keyMan;

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
    }

    freeCamMove() {}
    
}
