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

        this.hitboxes[0] = new Hitbox(-1010, 561, 3496, 1550, false);
        this.hitboxes[1] = new Hitbox(-2452,-3521,2564,5660 )
        this.hitboxes[2] = new Hitbox(-101,-1800,2239,1985 )
        this.hitboxes[3] = new Hitbox(3244,562,2582,1485 )
        this.hitboxes[4] = new Hitbox(2030,-1824,2437,1555 )
        this.hitboxes[5] = new Hitbox(3617,-1740,1672,1917 )
        this.hitboxes[6] = new Hitbox(5606,-89,2138,249 )
        this.hitboxes[7] = new Hitbox(5169,-1733,1066,1321 )
        this.hitboxes[8] = new Hitbox(6191,558,245,79 )
        this.hitboxes[9] = new Hitbox(7018,558,217,79 )
        this.hitboxes[10] = new Hitbox(7667,558,2156,1518 )       
        this.hitboxes[this.hitboxes.length] = new Hitbox(6499,-1985,1244,1922 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8065,-646,2658,1329 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7632,-2009,2159,989 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10364,-1212,339,724 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10365,-2024,300,442 )
        //this.hitboxes[this.hitboxes.length] = new Hitbox(9742,-1604,208,381 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9742,-1604,355,381 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10578,-2023,1973,2610 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7075,-3870,2971,1894 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12419,-3870,1701,1459 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12526,-2022,3058,1316 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14539,-2723,2425,1956 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13836,-4016,1493,941 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(13836,-4016,3113,585 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11522,-5009,942,2038 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9396,-5008,1822,2037 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16795,-2728,1436,1098 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(17495,-4866,1456,3134 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(16603,-4433,338,447 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(16599,-5520,311,636 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(16608,-5595,2815,462 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(17493,-5276,2048,647 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(14298,-6426,5484,973 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(14661,-4986,242,404 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(13833,-4650,381,739 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(13836,-6650,491,1311 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(10947,-6899,3139,1454 )
       this.hitboxes[this.hitboxes.length] = new Hitbox(9094,-6888,2174,1923 )
       
        
        
        //this.hitboxes[this.hitboxes.length] = new Hitbox(7425,-2104,3888,1728 )
        //this.hitboxes[this.hitboxes.length] = new Hitbox(9811,-540,1520,2483 )
        
        
        this.stairs(10860, -2024 + 1, 994, 91, 360, 1) 
        /**/   
    }

    stairs(x, y, width, height, step, stepH){
        for(let i = 0; i < step; i++){
            this.hitboxes[this.hitboxes.length] = new Hitbox(x + stepH * (i),y - stepH * (i),width - stepH * (i * (2)),height)
        }
    }

    draw(cameraX, cameraY, color = "#0f0f0f") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }


}
