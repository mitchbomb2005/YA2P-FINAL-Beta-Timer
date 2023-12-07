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
        this.hitboxes[ 0 ] = new Hitbox( 0.44844287297627 , -1645.8061077667423 , 1067.9830621358376 , 1131.2895043283756)
        this.hitboxes[ 1 ] = new Hitbox( 1712.3099806344521 , -2071.3188340224106 , 789.998596189017 , 1685.7963336967969)
        this.hitboxes[ 2 ] = new Hitbox( 2435.999481237835 , 794.587104879429 , 708.945562086707 , 625.2196281897802 , false )
        this.hitboxes[3] = new Hitbox(3558.353103195812,-1653.8929226607643,4234.595683815191,142.00038651817886 )
        this.hitboxes[4] = new Hitbox(8151.948900425961,-1653.8925361425854,1479.0003021419634,92 )

        this.hitboxes[5] = new Hitbox(6580.000000000004,-3893.022496247081,334.9999996031456,46.999996247091985 )
        this.hitboxes[7] = new Hitbox(6850.519535189886,-4132.043131985501,66,572.3162885917945 )
        this.hitboxes[8] = new Hitbox(5311.519535190139,-3420.032923105111,400.004735825848,97.98792310576664 )
        this.hitboxes[9] = new Hitbox(5313.519535189893,-2989.044999999983,295,99 )
        this.hitboxes[10] = new Hitbox(5182.543244263369,-3809.044522906692,360.9762909280789,72.99952290674082 )
        this.hitboxes[6] = new Hitbox(5053.540286344286,-5203.945595304419,569.9898272558166,502.9104901995852 )
        
        
        //this.hitboxes[ 3 ] = new Hitbox( 5929.59547960569 , 174.29698143480516 , 1832.3937943238943 , 935.9594929404185 , false )
        //this.hitboxes[ 3 ] = new Hitbox( -1201.0548393697882 , -2480.9417804490217 , 1209.9998826938306 , 1883.6393987170195 , false )
    }

    draw(cameraX, cameraY, color = "#500000") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }
}
