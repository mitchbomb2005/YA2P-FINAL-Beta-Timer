

import { Hitbox } from "../../Hitbox.js";

export class Enabler {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        //this.hitboxes[0] = new Hitbox(1238,138,336,470, false, "hook", true, "#fff")

        this.hitboxes[0] = new Hitbox(8726,186,213,28, false, "hook", true, "rgba(0,0,0,0)" )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11251,-2397,211,40, false, "hook", true, "rgba(0,0,0,0)" )
 
         
    }

    draw(cameraX, cameraY, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, this.hitboxes[i].extraInfoIII);
        }

    }
    nDraw(camera, color = "#fff") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, this.hitboxes[i].extraInfoIII);
        }

    }
}
