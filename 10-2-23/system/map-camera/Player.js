'use strict';

// rename this to Player.js

import { Hitbox } from "./Hitbox.js";

export class Player {

    // System
    keyManager;

    // Variables
    velX = 0;
    velY = 0;
    x;
    y;
    jump = 0;
    jumpState = false
    wallJumpLeft = false
    wallJumpRight = false

    // Constant
    debug;
    map;
    camera;
    playerHitbox = new Array()
    maxVelX = 100;
    maxVelY = 50;
    noclipVelChange = 10;
    velChange = 4;
    coyoteTime = 5
    jumpVel = 38 // this.coyoteTime
    wallJumpVelY = 40
    wallJumpVelX = 60
    wallJumpCheck = false

    constructor(x, y, keyManager, debug, map, camera) {
        this.keyManager = keyManager;
        this.x = x;
        this.y = y;
        this.debug = debug
        this.map = map
        this.camera = camera
        this.#buildHitbox(-25, -75, 50, 125)
    }

    #buildHitbox(x, y, width, height) {
        this.playerHitbox[0] = new Hitbox(x + 5, y + (height - 10), width - 10, 10); // bottom of hitbox
        this.playerHitbox[1] = new Hitbox(x + 5, y, width - 10, 10) // top of hitbox
        this.playerHitbox[2] = new Hitbox(x, y + 50, 10, height - 100) // small left of hitbox
        this.playerHitbox[3] = new Hitbox(x + width - 10, y + 50, 10, height - 100) // small right of hitbox
        this.playerHitbox[4] = new Hitbox(x, y + 30, 10, height - 60) // left of hitbox
        this.playerHitbox[5] = new Hitbox(x + width - 10, y + 30, 10, height - 60) // right of hitbox

        this.playerHitbox[100] = new Hitbox(x, y, width, height)
    }

    update() {
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else {
            this.#move()
            this.#updateVelocity()
        }
        if (!this.debug.freeCam) {
            this.camera.x = this.camera.x - (((this.camera.x - 838) - this.x) / 10)
            this.camera.y = this.camera.y - (((this.camera.y - 509) - this.y) / 10) 
        }
        if (this.jump > 0) {
            this.wallJumpCheck = true
        }
        //console.log(this.velY)

    }
    
    #updateVelocityNoclip() {
        if (this.keyManager.isKeyPressed("KeyD")) {
            this.velX -= this.noclipVelChange;
            if (Math.abs(this.velX) > this.maxVelX) {
                this.velX = -this.maxVelX;
            }

        }
        if (this.keyManager.isKeyPressed("KeyA")) {
              this.velX += this.noclipVelChange;
              if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }
              
        }
        if (this.keyManager.isKeyPressed("KeyW")) {
            this.velY += this.noclipVelChange;
            if (this.velY > this.maxVelY) {
                this.velY = this.maxVelY;
          }
            
        }
        if (this.keyManager.isKeyPressed("KeyS")) {
            this.velY -= this.noclipVelChange;
            if (Math.abs(this.velY) > this.maxVelY) {
                this.velY = -this.maxVelY;
            }

        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
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
            if (this.velY < 0 && this.wallJumpRight) {
                this.velY = this.velY / 2
            }

        }
        
        if (this.keyManager.isKeyPressed("KeyA")) {
            this.velX += this.velChange;
            if (this.velX > this.maxVelX) {
                this.velX = this.maxVelX;
            }    
            if (this.velY < 0 && this.wallJumpLeft) {
                this.velY = this.velY / 2
                console.log("wallslide")
            }
        }

        if (this.keyManager.isKeyPressed("KeyW")) {
            //if (this.jumpState == true) {
                if (this.velY <= 0 && this.jump > 0) {
                    this.velY += this.jumpVel;     
                } else if (this.keyManager.wasKeyJustPressed("KeyW")) {
                    if (this.jump > 0) {
                        this.velY += this.jumpVel;   
                    } else if (this.wallJumpLeft && this.wallJumpCheck) {
                        if (this.velY < 0) {
                            this.velY = this.wallJumpVelY
                        } else {
                            this.velY += this.wallJumpVelY - 10
                        }
                        
                        this.velX -= this.wallJumpVelX
                        this.wallJumpCheck = false
                    } else if (this.wallJumpRight && this.wallJumpCheck) {
                        if (this.velY < 0) {
                            this.velY = this.wallJumpVelY
                        } else {
                            this.velY += this.wallJumpVelY - 10
                        }
                        
                        this.velX += this.wallJumpVelX
                        this.wallJumpCheck = false
                    }
                }

                /*
                if (this.keyManager.wasKeyJustPressed("KeyW")) {
                    if (this.wallJumpLeft && this.wallJumpCheck) {
                        if (this.velY < 0) {
                            this.velY = this.wallJumpVelY
                        } else {
                            this.velY += this.wallJumpVelY - 10
                        }
                        
                        this.velX -= this.wallJumpVelX
                        this.wallJumpCheck = false
                    }
                }
                */

            //}
        }



        this.velX = this.velX * .8
        this.velY = this.velY - 1.5
        this.velY = this.velY * .997

        if (this.velY > this.maxVelY + 50) {
            this.velY = this.maxVelY + 50;
        }
        if (this.velY < -this.maxVelY) {
            this.velY = -this.maxVelY;
            console.log("fixed velocity")
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
        this.x += this.velX;
        this.y += this.velY;
        this.jump--
        this.#colide()
        //console.log(this.x, this.y)
    }

    drawHitbox() {
        this.playerHitbox[100].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#909090");

        this.playerHitbox[4].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#c0c0c0");
        this.playerHitbox[5].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#c0c0c0");
        this.playerHitbox[0].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[1].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[2].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
        this.playerHitbox[3].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
    }

    #collisionCheck(part, i, type) {
        
        if  (  
        ((  this.playerHitbox[part].y -this.y >= type.hitboxes[i].y &&
            this.playerHitbox[part].y -this.y <= type.hitboxes[i].y + type.hitboxes[i].height) || 
        (   this.playerHitbox[part].y + this.playerHitbox[part].height -this.y >= type.hitboxes[i].y &&
            this.playerHitbox[part].y + this.playerHitbox[part].height -this.y <= type.hitboxes[i].y + type.hitboxes[i].height)) &&
        ((  this.playerHitbox[part].x -this.x >= type.hitboxes[i].x &&
            this.playerHitbox[part].x -this.x <= type.hitboxes[i].x + type.hitboxes[i].width) ||
        (   this.playerHitbox[part].x + this.playerHitbox[part].width -this.x >= type.hitboxes[i].x &&
            this.playerHitbox[part].x + this.playerHitbox[part].width -this.x <= type.hitboxes[i].x + type.hitboxes[i].width))
            ) {
            var hit = true
        }
        return (hit);
    }
    #colide() {
        this.wallJumpRight = false
        this.wallJumpLeft = false
        for (let i = 0; i < this.map.hitboxes.length; i++) /* left hit */ { 
            if(this.#collisionCheck(2, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                this.wallJumpLeft = true
                //console.log("left hit")
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* right hit */ { 
            if(this.#collisionCheck(3, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = -hitX + offset
                this.wallJumpRight = true
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* ground hit */ {  
            if(this.#collisionCheck(0, i, this.map)) {
                var offset = 50
                //console.log("hit!")
                if(this.velY < 0) {
                    this.velY = 0
                }
                var y = this.y 
                var hitY = this.map.hitboxes[i].y
                this.y = -hitY + offset
                this.jump = this.coyoteTime
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* ceilling hit */ { 
            if(this.#collisionCheck(1, i, this.map)) {
                var offset = 75
                //console.log("hit!")
                if(this.velY > 0) {
                    this.velY = 0
                }
                var hitH = this.map.hitboxes[i].height
                var hitY = this.map.hitboxes[i].y
                this.y = (-hitY - (offset)) - hitH
                //this.jump = true
            }
        }
/*
        for (let i = 0; i < this.map.hitboxes.length; i++) /* left hit / { 
            if(this.#collisionCheck(4, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = (-hitX - (offset)) - hitW
                //this.wallJumpLeft = true
            }
        }

        for (let i = 0; i < this.map.hitboxes.length; i++) /* right hit / { 
            if(this.#collisionCheck(5, i, this.map)) {
                var offset = 25
                //console.log("hit!")
                if (this.velX > 0) {
                    this.velX = 0
                }
                var hitW = this.map.hitboxes[i].width
                var hitX = this.map.hitboxes[i].x

                this.x = -hitX + offset
                //this.wallJumpRight = true
            }
        }
*/
    }
}
