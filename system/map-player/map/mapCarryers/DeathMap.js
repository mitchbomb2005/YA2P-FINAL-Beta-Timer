'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Death {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        //this.hitboxes[ 0 ] = new Hitbox( 0 , 0 , 0 , 0 , false )
        this.hitboxes[0] = new Hitbox(5561,-59,64,183 )
        this.hitboxes[1] = new Hitbox(5200,-57,132,181 )
        this.hitboxes[2] = new Hitbox(2284,916,1098,1080 )
        this.hitboxes[3] = new Hitbox(5810,628,1889,1543 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9743,-1980,306,924 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10406,-1637,230,539 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8334,-714,360,102 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9192,-716,419,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12564,-2076,532,132 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14067,-2677,123,236 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14482,-2690,113,255 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(15605,-3083,1346,423 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14941,-2768,213,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11160,-4965,87,1919 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11477,-4965,59,1916 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14088,-4132,2610,193 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17423,-5233,181,2648 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16844,-2763,761,178 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14167,-5529,2453,130 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12374,-4452,1495,679 )
 
        
 
        /**/
        
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
