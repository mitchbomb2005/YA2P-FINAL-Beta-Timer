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
    debug;
    map;
    camera;
    playerHitbox = new Array()
    jump = false;

    // Constant
    maxVelX = 100;
    maxVelY = 100;
    noclipVelChange = 10;
    velChange = 5;
    jumpVel = 30

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
    }

    update() {
        if(this.debug.noClip) {
            this.#updateVelocityNoclip();
            this.#moveNoclip();
        } else {
            this.#move()
            this.#updateVelocity()
        }
        this.camera.x = this.camera.x - (((this.camera.x - 838) - this.x) / 10)
        this.camera.y = this.camera.y - (((this.camera.y - 509) - this.y) / 10) 

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
        if (this.jump == true) {
            if (this.keyManager.wasKeyJustPressed("KeyW")) {
                this.velY = this.jumpVel;          
            }
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
        this.jump = false
        for (let i = 0; i < this.map.hitboxes.length; i++) {
            if(this.#collisionCheck(0, 50, i)) {
                var offset = 50
                console.log("hit!")
                if(this.velY < 0) {
                    this.velY = 0
                }
                var y = this.y 
                var hitY = this.map.hitboxes[i].y
                this.y = -hitY + offset
                this.jump = true
            }
        }
        console.log(this.x, this.y)
    }

    drawHitbox() {
        this.playerHitbox[0].draw(-this.x + this.camera.x, -this.y + this.camera.y, "#f0f0f0");
    }

    #collisionCheck(part, offset = 50, i) {

        //*
        
            if  //((-this.y + (offset) > this.map.hitboxes[i].y && -this.y + (offset) < this.map.hitboxes[i].y + this.map.hitboxes[i].height) && (-this.x > this.map.hitboxes[i].x && -this.x < this.map.hitboxes[i].x + this.map.hitboxes[i].width)){
 
            
            //*
            ((this.playerHitbox[part].y + this.playerHitbox[part].height <= this.map.hitboxes[i].y &&
                this.playerHitbox[part].y + this.playerHitbox[part].height >= this.map.hitboxes[i].y + this.map.hitboxes[i].height) && (
                this.playerHitbox[part].x + this.playerHitbox[part].height <= this.map.hitboxes[i].x &&
                this.playerHitbox[part].x + this.playerHitbox[part].height >= this.map.hitboxes[i].x + this.map.hitboxes[i].width)) {
                var hit = true
            }
            return (hit);
        }
        //*/


        /*
        
        for (let i = 0; i < 5; i++) {
            if ((-this.y + (offset) > this.map.hitboxes[i].y && -this.y + (offset) < this.map.hitboxes[i].y + this.map.hitboxes[i].height) && (-this.x > this.map.hitboxes[i].x && -this.x < this.map.hitboxes[i].x + this.map.hitboxes[i].width)){

                
                }
            }
        */
        
    
}
//}
