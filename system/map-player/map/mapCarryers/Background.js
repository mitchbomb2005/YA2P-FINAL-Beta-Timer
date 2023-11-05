'use strict';

import { Hitbox } from "../../Hitbox.js";

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

    layer1 = new Array
    layer2 = new Array
    camera

    constructor(cam) {
        this.createLayer1()
        this.createLayer2()
        this.camera = cam
    }

// base
// ctx.fillRect((x/1) + 0 , (y/2) + 0 , 0, 0);

    createLayer1() {
        this.layer1[0] = new Hitbox(150, 150, 50, 650)
        this.layer1[1] = new Hitbox(175, 450, 500, 40)
        this.layer1[2] = new Hitbox(670, 150, 50, 650)
        this.layer1[3] = new Hitbox(1000, 0, 950, 50)
        this.layer1[4] = new Hitbox(1900, 0, 50, 400)
        this.layer1[5] = new Hitbox(1900, 350, 650, 50)
        this.layer1[6] = new Hitbox(1000, -500, 50, 550)
        this.layer1[7] = new Hitbox(1700, -500, 50, 550)
        this.layer1[8] = new Hitbox( 2506.5000000000023 , 350.2387499999997 , 43 , 312.00000000000006 , false )
        this.layer1[ 9 ] = new Hitbox( 2240.500000000002 , 65.48882334537797 , 40 , 297 , false )
        this.layer1[ 10 ] = new Hitbox( 1936.5000000000018 , 65.48882334537797 , 332 , 42 , false )
        this.layer1[ 11 ] = new Hitbox( 999.9999999999981 , -499.2612500000009 , 748.0000000000001 , 44 , false )
        this.layer1[ 12 ] = new Hitbox( 187.20718971770532 , 151.39294688485757 , 534.999992474061 , 46.107053115142435 , false )
        this.layer1[ 23 ] = new Hitbox( 2505.500000000002 , -113.02249999999992 , 45 , 517 , false )
        this.layer1[ 24 ] = new Hitbox( 2505.500000000002 , -113.02249999999992 , 526 , 48.000163073910414 , false )
        this.layer1[ 25 ] = new Hitbox( 2981.499978914576 , -564.0224989445318 , 49.00002108542458 , 498.99999894453197 , false )
        this.layer1[ 13 ] = new Hitbox( 2280.5000000000005 , -594.022294823302 , 750 , 47.99979482590834 , false )
        this.layer1[ 14 ] = new Hitbox( 2640.5000000000005 , -556.0225000115232 , 49 , 469.0000000115223 , false )
        this.layer1[ 15 ] = new Hitbox( 2666.5000000000005 , -471.9396081138776 , 340 , 51.917635555836 , false )
        this.layer1[ 16 ] = new Hitbox( 2871.5000000000005 , -559.0225000000075 , 42 , 130.00000000000614 , false )
        this.layer1[ 17 ] = new Hitbox( 2279.4999999890283 , -906.0224995699941 , 53.00000001096896 , 354.9999995700492 , false )
        this.layer1[ 18 ] = new Hitbox( 1811.5000010157719 , -918.0224999999987 , 520.9999989842286 , 46.00001216986243 , false )
        this.layer1[ 19 ] = new Hitbox( 3017.4999999484903 , -374.02249899308913 , 387.00000005150605 , 54.999998993089775 , false )
        this.layer1[ 20 ] = new Hitbox( 3213.4999999999964 , -324.0224979578596 , 51 , 491.99999795786994 , false )
        this.layer1[ 21 ] = new Hitbox( 2667.499967775882 , 123.97749979028868 , 598.0000322239384 , 61.00000020971049 , false )
        this.layer1[ 22 ] = new Hitbox( 2667.499967775882 , 123.97749979028868 , 63.000032159282455 , 598.9999994322513 , false )
        //this.layer1[0] = new Hitbox()
    }

    createLayer2() {
        this.layer2[0] = new Hitbox(75, 150, 60, 650)
        this.layer2[1] = new Hitbox(80, 350, 580, 50)
        this.layer2[2] = new Hitbox(655, 0, 60, 800)
        this.layer2[3] = new Hitbox(665, 440, 380, 60)
        this.layer2[4] = new Hitbox(990, -550, 60, 1350)
        this.layer2[5] = new Hitbox(390, -50, 660, 60)
        this.layer2[6] = new Hitbox(990, 0, 400, 60)
        this.layer2[7] = new Hitbox(990, 300, 400, 60)
        this.layer2[8] = new Hitbox(1330, 0, 60, 860)
        this.layer2[ 9 ] = new Hitbox( 106.90582515617223 , 148.87394284176108 , 341.8495599493749 , 67 , false )
        this.layer2[ 10 ] = new Hitbox( 390.7553851052211 , -49.12605715823892 , 64 , 264 , false )

        //this.layer2[0] = new Hitbox()
    }
    

    Draw() {
        for (let i = 0; i < this.layer2.length; i++) {
            this.layer2[i].draw(this.camera.x / 3, this.camera.y / 3, "#7f7f7f")
        }
        for (let i = 0; i < this.layer1.length; i++) {
            this.layer1[i].draw(this.camera.x / 2, this.camera.y / 2, "#5f5f5f")  
        }


    }

}