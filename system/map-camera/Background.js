const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Bg {

// base
// ctx.fillRect((x/1) + 0 , (y/2) + 0 , 0, 0);

    Layer_1(x, y) {
        ctx.fillStyle = "#5f5f5f";
        ctx.fillRect((x/2) + 100, (y/2) + 250, 50, 550);
        ctx.fillRect((x/2) + 125, (y/2) + 450, 550, 40);
        ctx.fillRect((x/2) + 670, (y/2) + 250, 50, 550);
    }

    Layer_2(x,y) {
        ctx.fillStyle = "#7f7f7f";
        //ctx.fillRect((x/3) + 75 , (y/2) + 0 , 0, 0);
        ctx.fillRect((x/3) + 80 , (y/2) + 350 , 580, 40);
        //ctx.fillRect((x/3) + 0 , (y/2) + 0 , 0, 0);
    }

}