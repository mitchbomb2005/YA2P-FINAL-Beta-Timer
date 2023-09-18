const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Map {

    x;
    y;

    constructor(x, y) {
        this.x = x
        this.y = y
        
    }

    move(x, y) {
        for(let i = 0; i >= 60; i++)
        return new Promise(resolve => setTimeout(resolve, ms));
        this.x = this.x + (x / 60)
        this.y = this.y + (y / 60)
    }

    draw(x, y) {

        ctx.fillStyle = "#0f0f0f";
        ctx.fillRect(x + 555, y + 561, 150, 50);
        
        //console.log(x, y)
        this.move(60, 0)
        console.log(this.x, this.y)
    }
}