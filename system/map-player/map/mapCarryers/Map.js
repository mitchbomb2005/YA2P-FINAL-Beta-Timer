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
        this.hitboxes[0] = new Hitbox(-810, 561, 3296, 1550, false);
        this.hitboxes[ 3 ] = new Hitbox( -1024.7860391771198 , -65.27843357064609 , 1078.9999169405419 , 926.7784335706135 , false )
        this.hitboxes[ 1 ] = new Hitbox( -1020.3557599703686 , -757.0166034383657 , 2310.7671079087622 , 933.9944019380071 , false )
        this.hitboxes[ 2 ] = new Hitbox( 1520.6442400475894 , -756.0224994350601 , 700.0000000001269 , 952.9999899576599 , false )
        this.hitboxes[ 4 ] = new Hitbox( 996.1738945747691 , -1167.0391034409804 , 105 , 218.0000000026132 , false )
        this.hitboxes[ 5 ] = new Hitbox( 1681.173894574768 , -1393.0391034383647 , 60 , 169 , false )
        this.hitboxes[ 6 ] = new Hitbox( 1451.173894574768 , -2153.039103438363 , 210 , 256 , false )
        this.hitboxes[ 7 ] = new Hitbox( 1762.1690729061534 , -2023.0389567428833 , 719.0048216672344 , 498.99985330456047 , false )
        this.hitboxes[ 10 ] = new Hitbox( 1798.4962310160906 , -1578.696439163481 , 1577 , 1395.001228150091 , false )
        this.hitboxes[ 8 ] = new Hitbox( 3058.4962307755827 , 581.3035608364256 , 861.0000002404895 , 905.000000000077 , false )
        this.hitboxes[ 9 ] = new Hitbox( 3167.610285366167 , -1051.6706698869948 , 913.7298171868465 , 1260.9742307245172 , false )
        this.hitboxes[ 11 ] = new Hitbox( 191.2324388841189 , -2558.757099941173 , 1468.6330433808441 , 612.0237275325303 , false )
        this.hitboxes[ 14 ] = new Hitbox( -1870.8983563362772 , -1699.3320322716108 , 2100.225406037356 , 1141.982234339685 , false )
        this.hitboxes[ 13 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 1643.653863881141 , 1281.4502726516807 , false )
        this.hitboxes[ 12 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 3765.95889105883 , 495.2210267864475 , false )
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
