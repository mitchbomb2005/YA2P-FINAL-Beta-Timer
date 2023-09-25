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
    map;

    // Constant
    maxVelX = 100;
    maxVelY = 100;
    noclipVelChange = 10;
    velChange = 5;
    jumpVel = 70

    constructor(x, y, keyManager, debug, map) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
        this.map = map
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
        this.velY = this.velY - 1
        this.velY = this.velY * .997
        this.x += this.velX;
        this.y += this.velY;
        this.#collisionCheck(50)
        console.log(this.x, this.y)
    }

    #collisionCheck(offset) {
        for (let i = 0; i < 4; i++) {

            if ((-this.y + (459 + offset) > this.map.hitboxes[i].y && -this.y + (459 + offset) < this.map.hitboxes[i].y + this.map.hitboxes[i].height) && (-this.x + 838 > this.map.hitboxes[i].x && -this.x + 838 < this.map.hitboxes[i].x + this.map.hitboxes[i].width)){
                if(this.velY < 0) {
                    this.velY = 0
                }
                var y = this.y 
                var hitY = this.map.hitboxes[i].y
                for(let s = 0; s < (hitY - y); s++) {
                    this.y = this.y + 1
                }
            }
        }
    }
    
}
