export class Map {

    x;
    y;

    constructor(x, y) {
        this.x = 0
        this.y = 0
    }

    draw(x, y) {

        ctx.fillStyle = "#0f0f0f";
        ctx.fillRect(x, y, 50, 50);
        
        this.x++
        this.y--

    }
}