const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

bean() 

// please just upload, i want this to work, it's just not working


function bean(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(0, 20, 1676, 878);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(800, 800, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "#afbfaf";
    ctx.fill();
    ctx.closePath();
}