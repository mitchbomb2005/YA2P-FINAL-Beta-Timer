'use strict';

import { Hitbox } from "../../Hitbox.js";
import { DrawUtils } from "../../../../utils/DrawUtils.js"

export class Map {

    // fields
    hitboxes = new Array();
    drawU = new DrawUtils()

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[0] = new Hitbox(-1010, 561, 3096, 450, false);
        this.hitboxes[ 3 ] = new Hitbox( -1024.7860391771198 , -65.27843357064609 , 1078.9999169405419 , 926.7784335706135 , false )
        this.hitboxes[ 1 ] = new Hitbox( -1020.3557599703686 , -757.0166034383657 , 2310.7671079087622 , 933.9944019380071 , false )
        this.hitboxes[ 2 ] = new Hitbox( 1520.6442400475894 , -756.0224994350601 , 700.0000000001269 , 952.9999899576599 , false )
        this.hitboxes[ 4 ] = new Hitbox( 996.1738945747691 , -1167.0391034409804 , 105 , 218.0000000026132 , false )
        this.hitboxes[ 5 ] = new Hitbox( 1681.173894574768 , -1393.0391034383647 , 60 , 169 , false )
        this.hitboxes[ 6 ] = new Hitbox( 1451.173894574768 , -2153.039103438363 , 210 , 256 , false )
        this.hitboxes[ 7 ] = new Hitbox( 1762.1690729061534 , -1623.0389567428833 , 719.0048216672344 , 98.99985330456047 , false )
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
