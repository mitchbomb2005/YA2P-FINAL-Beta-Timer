const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Map {

    draw(x, y,) {

        ctx.fillStyle = "#0f0f0f";
        //ctx.fillRect(x + 555, y + 561, 600, 150);
        //ctx.fillRect(x + 555, y + 161, 600, 150);
        ctx.fillRect(x - 10, y + 561, 1696, 1000);
        ctx.fillRect(x - 10, y + 0, 1696, 300);
        
    }
}