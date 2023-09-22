'use strict';

// rename this to Player.js

export class Camera {

    // System
    keyManager;

    // Variables
    velX = 0;
    velY = 0;
    x;
    y;
    debug;

    // Constant
    maxVelX = 100;
    maxVelY = 100;
    noclipVelChange = 10;
    velChange = 5;
    jumpVel = 70

    constructor(x, y, keyManager, debug) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
    }

    update() {
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else {
            this.#updateVelocity()
            this.#move()
        }

    }
    
    #updateVelocityNoclip() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.noclipVelChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                velX = -maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.noclipVelChange;
              if (this.velX > this.maxVelX) {
                velX = maxVelX;
            }
              
        }
        if (this.keyManager.isKeyPressed("KeyW")) {
            this.velY += this.noclipVelChange;
            if (this.velY > this.maxVelY) {
              velY = maxVelY;
          }
            
        }
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.noclipVelChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                velY = -maxVelY;
            }

        }
    }

    #moveNoclip() {
        this.x += this.velX;
        this.y += this.velY;
        this.velX = this.velX * .8
        this.velY = this.velY * .8
    }

    #updateVelocity() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.velChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                this.velX = -this.maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.velChange;
              if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }
              
        }
        if (this.keyManager.wasKeyJustPressed("KeyW")) {
            this.velY = this.jumpVel;          
        }
        if (this.velY > this.maxVelY) {
            velY = maxVelY;
        }
        /*
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.velChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                velY = -maxVelY;
            }
        }
        */


    }

    #move() {
        this.velX = this.velX * .8
        this.velY = this.velY - 5
        this.velY = this.velY * .95
        if (this.#collisionCheck()) {
            this.velY = 0
        }
        this.x += this.velX;
        this.y += this.velY;
    }

    #collisionCheck() {
        //for (let i = 0; i < this.hitboxes.length; i++) {}
        return(false)
    }
    
}
