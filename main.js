const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

bean(800, 400, 50, 100) 
bean(900, 400, 50, 100)
bean(700, 400, 50, 100)
bean(800, 600, 50, 100)
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// i hate this

function bean(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height - width / 2);
    ctx.fillStyle = "#afbfaf";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + (width / 2), y + (height - (width / 2)), width / 2, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + (width / 2), y, width / 2, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}