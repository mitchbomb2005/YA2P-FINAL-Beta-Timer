

import { Hitbox } from "../../Hitbox.js";

export class Enabler {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[0] = new Hitbox(
            -227.3244193651484,-2105.4968506294927,141.99999818434776,257.14271038723246 ,
            false,
            -7959,2268)
        
    }

    draw(cameraX, cameraY, color = "#dbb000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
