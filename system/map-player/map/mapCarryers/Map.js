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
        this.hitboxes[0] = new Hitbox(-1010, 561, 3096, 450, false); // base floor
        this.hitboxes[1] = new Hitbox(-610, -2200, 2296, 2400, false); // base roof
        //this.hitboxes[2] = new Hitbox(-700, -400, 1000, 1411, false);
        this.hitboxes[ 3 ] = new Hitbox( 2008.9999999999964 , 193.97764669075622 , 609 , 815.9998532503878 , false )
        this.hitboxes[ 4 ] = new Hitbox( 2993.0024418611138 , 233.47749999999962 , 181 , 57 , false )
        this.hitboxes[ 2 ] = new Hitbox( 3756.0024418375065 , 194.47749999999968 , 932.0000000236037 , 823.9999037479197 , false )
        this.hitboxes[ 5 ] = new Hitbox( -1283.9984924064765 , -1289.76921819892675 , 713 , 1603.2692181279472 , false )
        this.hitboxes[ 6 ] = new Hitbox( -2833.9984859654035 , 569.5 , 1458.9999935589274 , 666 , false )
        this.hitboxes[ 7 ] = new Hitbox( -2112.0019770190243 , 27.62182852528383 , 371 , 151 , false )
        this.hitboxes[ 8 ] = new Hitbox( -2107.000722480996 , 45.99999992902045 , 202 , 593.0000000709794 , false )
        this.hitboxes[ 9 ] = new Hitbox( -3844.8261458799025 , -80.53039193224606 , 1783.5923011955647 , 810.5298417330971 , false )
        this.hitboxes[ 10 ] = new Hitbox( -3857.231947889016 , -583.0303919322581 , 1374.6660344761053 , 742.0000000000115 , false )
        this.hitboxes[ 11 ] = new Hitbox( -3490.1934929277077 , -972.7555040524678 , 2258.8671014008346 , 594.8641219037341 , false )



        
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
