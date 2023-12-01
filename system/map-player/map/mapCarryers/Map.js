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
        this.hitboxes[ 21 ] = new Hitbox( 3911.0803781769037 , 582.8035608364256 , 2192.1541173084597 , 923.4774999999994 , false )
        this.hitboxes[ 19 ] = new Hitbox( 4414.080184911148 , -276.6798653053896 , 1562.0480917570867 , 974.9605535074706 , false )
        this.hitboxes[ 20 ] = new Hitbox( 2687.086390987968 , -1591.716135992032 , 3268.874332049012 , 1039.9971765632934 , false )
        this.hitboxes[ 15 ] = new Hitbox( 5853.115350369755 , -1673.0866408389631 , 1835.961566147681 , 639.367701675036 , false )
        this.hitboxes[ 16 ] = new Hitbox( 5905.2937354952 , -1144.788070101726 , 1780.786633326693 , 398.06913094071706 , false )
        //this.hitboxes[ 15 ] = new Hitbox( 6533.093557635124 , -886.7099454599752 , 505.98625129009724 , 78.99088560241285 , false )
        //this.hitboxes[ 16 ] = new Hitbox( 6684.080378178637 , -834.6875112029338 , 190.00000000002274 , 77.96859391966541 , false )
        this.hitboxes[ 17 ] = new Hitbox( 7703.080378117162 , -229.8273414480135 , 1667.922089215972 , 1341.101193008711 , false )
        this.hitboxes[ 18 ] = new Hitbox( 7669.080392769431 , -1671.7117964514277 , 1679.0103461869712 , 1109.9928573108334 , false )
        
        /**/   
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
