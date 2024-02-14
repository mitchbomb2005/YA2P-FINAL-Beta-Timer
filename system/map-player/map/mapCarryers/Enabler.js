

import { Hitbox } from "../../Hitbox.js";

export class Enabler {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        //this.hitboxes[0] = new Hitbox(1238,138,336,470, false, "hook", true, "#fff")

        //this.hitboxes[0] = new Hitbox(8726,186,213,28, true, "hook", true)
        this.hitboxes[this.hitboxes.length] = new Hitbox(11251,-2397,211,40, true, "hook", true)

        this.hitboxes[this.hitboxes.length] = new Hitbox(623,3063,385,23, true, "hook", true )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1607,3065,386,17, true, "hookII", true )
        
 
         
    }

    draw(cameraX, cameraY, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, this.hitboxes[i].extraInfoIII);
        }

    }
    nDraw(camera, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}
