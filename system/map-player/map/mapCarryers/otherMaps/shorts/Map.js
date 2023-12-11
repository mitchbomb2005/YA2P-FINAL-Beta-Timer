'use strict';

import { Hitbox } from "../../../../Hitbox.js";
import { DrawUtils } from "../../../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {

        this.hitboxes[0] = new Hitbox(181.99999999999977,463.95499719175035,468,58.00000000000006 )
        this.hitboxes[1] = new Hitbox(181.1488155997033,507.93249719175014,469,5411.252701099249 )
        this.hitboxes[2] = new Hitbox(-9323.851184400286,-29630.61216966461,9514.999999999989,31719.228961452074 )
        this.hitboxes[3] = new Hitbox(642.1488155997022,-47367.90823715892,9209.159265649305,49709.84079556712 )
        this.hitboxes[4] = new Hitbox(140.148815599689,-485.0627801193358,371,145.99527888373012 )
        this.hitboxes[5] = new Hitbox(322.148815599689,171.85128522949617,357,95.08121196228319 )
        this.hitboxes[6] = new Hitbox(125.14881559968899,-220.06750280821927,353,104 )

 
        
 

    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
