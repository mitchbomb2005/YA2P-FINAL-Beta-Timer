const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Map {

    x;
    y;

    constructor(x, y) {
        this.x = x
        this.y = y
        
    }

    draw(x, y) {

        ctx.fillStyle = "#0f0f0f";
        ctx.fillRect(x + 125, y + 551, 50, 50);
        
        //console.log(x, y)
        this.x = x + 1
        //this.y = y + 1
        console.log(this.x, this.y)
    }
}