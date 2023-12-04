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

  //this.hitboxes[24] = new Hitbox(1451.1362846604356,-2156.2176276689797,208,262.00046251742333,false )

        this.hitboxes[0] = new Hitbox(-810, 561, 3296, 1550, false);
        this.hitboxes[ 3 ] = new Hitbox( -1024.7860391771198 , -65.27843357064609 , 1078.9999169405419 , 926.7784335706135 , false )
        this.hitboxes[ 1 ] = new Hitbox( -1020.3557599703686 , -757.0166034383657 , 2310.7671079087622 , 933.9944019380071 , false )
        this.hitboxes[ 2 ] = new Hitbox( 1520.6442400475894 , -756.0224994350601 , 700.0000000001269 , 952.9999899576599 , false )
        this.hitboxes[ 4 ] = new Hitbox( 996.1738945747691 , -1167.0391034409804 , 105 , 218.0000000026132 , false )
        this.hitboxes[ 5 ] = new Hitbox( 1681.173894574768 , -1393.0391034383647 , 60 , 169 , false )
        this.hitboxes[ 6 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[ 7 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[ 10 ] = new Hitbox( 1798.4962310160906 , -2078.696439163481 , 1878 , 1895.001228150091 , false )
        this.hitboxes[ 8 ] = new Hitbox( 3058.4962307755827 , 581.3035608364256 , 861.0000002404895 , 905.000000000077 , false )
        this.hitboxes[ 9 ] = new Hitbox( 3167.610285366167 , -1051.6706698869948 , 913.7298171868465 , 1260.9742307245172 , false )
        this.hitboxes[ 11 ] = new Hitbox( 191.2324388841189 , -2558.757099941173 , 2568.6330433808441 , 612.0237275325303 , false )
        this.hitboxes[ 14 ] = new Hitbox( -1870.8983563362772 , -1699.3320322716108 , 2100.225406037356 , 1141.982234339685 , false )
        this.hitboxes[ 13 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 1643.653863881141 , 1281.4502726516807 , false )
        this.hitboxes[ 12 ] = new Hitbox( -2105.631879977191 , -2773.561230225233 , 3765.95889105883 , 495.2210267864475 , false )
        
        this.hitboxes[ 15 ] = new Hitbox( 0,0,0,0, false )
        this.hitboxes[16] = new Hitbox(3851.340102553015,583.219692866808,1755.817818740457,1219.9958177544272 )
        this.hitboxes[17] = new Hitbox(4436.340103879944,-242.78030713316832,1540.9987705211997,866.9999892455901 )
        this.hitboxes[18] = new Hitbox(3972.3401025540848,-1561.0579773613297,1866.946600881693,1012.2776642992159 )
        this.hitboxes[19] = new Hitbox(5827.1789035139,-1592.8001638042379,1136.9999942334844,931.9964876769224 )
        this.hitboxes[20] = new Hitbox(6777.178903432223,-216.80280713316677,1137.8707834873076,1716.9958303105805 )
        this.hitboxes[21] = new Hitbox(5461.179185151041,-243.80260586217184,516.9997182811694,1823.5269399179128 )
        this.hitboxes[22] = new Hitbox(6920.17886981648,-1621.870036142584,920.4405295700999,1054.9880723326844 )
        
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
