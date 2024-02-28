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
        this.hitboxes[this.hitboxes.length] = new Hitbox(9743 - 50,-1980,306,924 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(10406,-1637,230,539 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8334,-714,360,102 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9192,-716,419,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12564,-2076,532,132 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14067,-2677,123,236 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14482,-2690,113,255 ) // 10
        this.hitboxes[this.hitboxes.length] = new Hitbox(15605,-2783,2046,423 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14941,-2768,213,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11160,-4965,87,1919 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11477,-4965,59,1916 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14088,-4132,2610,193 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(17423,-5233,181,2648 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16844,-2763,761,178 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14167,-5529,2453,130 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(12374,-4452,1495,679 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6072,-1723,173,1295 ) // 20
        this.hitboxes[this.hitboxes.length] = new Hitbox(-751,-2017,5361,48 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3472,-4643,52,1691 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2923,-2589,327,111 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4321,-4828,39,2092 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2293,-2458,109,476 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2319,-3279,390,100 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2738,-3349,70,480 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2362,-2526,91,94 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2237,-2803,96,316 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(668,-2648,85,223 ) // 30
        this.hitboxes[this.hitboxes.length] = new Hitbox(668,-2471,938,46 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1399,-3913,715,102 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1451,-4316,471,79 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1454,-4950,266,96 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-1820,-5416,107,412 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2197,-5794,103,478 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3342,-5061,895,114 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-2970,-5726,803,65 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12093,-3225,8713,3672, true ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(-4120,-5660,185,79 ) // 40
        this.hitboxes[this.hitboxes.length] = new Hitbox(-5074,-5417,233,113 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-6135,-5620,220,107 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-7339,-5697,281,116 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10300,-5639,1943,55 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10322,-6172,1965,102 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15982,-4954,5759,1913 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11209,-6155,98,514 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-11905,-5778,99,916 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-12794,-6155,126,636 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13193,-5635,518,117 ) // 50
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13189,-6198,129,682 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-13726,-5719,130,792 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14392,-5720,155,861 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15610,-6170,1029,111 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-20090,-2506,4768,2181 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-15943,-3206,2529,1594 )
        
        this.hitboxes[this.hitboxes.length] = new Hitbox(1592,7195,383,84 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(866,7678,640,87 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(1464,8152,480,105 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2009,9551,1397,78 ) // 60
        this.hitboxes[this.hitboxes.length] = new Hitbox(2312,8695,92,423 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2738,9087,87,468 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(2987,8695,408,99 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3624,9132,75,486 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7084,9114,53,504 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7117,9167,178,516 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7288,9291,206,410 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7333,8552,208,339 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7724,8855,92,50 ) 
        this.hitboxes[this.hitboxes.length] = new Hitbox(7629,7398,873,722 ) // 70
        this.hitboxes[this.hitboxes.length] = new Hitbox(7247,7484,92,48 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6615,8534,733,106 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7377,9540,884,85 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7460,7396,259,110 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8216,6267,135,3443 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6693,6911,160,1679 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6655,6809,201,169 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8216,6223,145,56 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8312,5786,93,530 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7675,6218,632,1294 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6639,6328,107,490 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6639,6328,512,52 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7523,5794,821,69 )
        
 
        
        //this.hitboxes[this.hitboxes.length] = new Hitbox(5567,4986,1256,95, false, true)
        








        
 
        
 
        /**/
        
    }

    draw(cameraX, cameraY) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].draw(cameraX, cameraY, "#500000");
            } else {
                this.hitboxes[i].draw(cameraX, cameraY, "#900000");

            }
        }

    }
    nDraw(camera) {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            if(this.hitboxes[i].extraInfoI){
                this.hitboxes[i].nDraw(camera, "#300000");
            } else {
                this.hitboxes[i].nDraw(camera, "#700000");

            }
        }

    }
}
