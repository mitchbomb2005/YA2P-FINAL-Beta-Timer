'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class DrawUtils {
        
    Bean(x, y, width, height) {

        ctx.beginPath();
        ctx.arc(x + (width / 2) - 5, y + 5, width / 2 +5, 0, ( Math.PI/180 ) * 190, ( Math.PI/180 ) * 180,  false);
        ctx.fillStyle = "rgba(0, 0, 0, .1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x + (width / 2) - 5, y+ (height - (width / 2)) + 5, width / 2 +5, 0, Math.PI / 1.06, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(x - 10, y, width + 10 , height - width / 2 + 10);
        ctx.fill();
        ctx.closePath();    


        ctx.beginPath();
        ctx.rect(x - 5, y - 5, width + 10 , height - width / 2 + 10);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x + (width / 2) , y + (height - (width / 2))  , width / 2 + 5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x + (width / 2), y, width / 2 +5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        // Draw inside color of bean

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

}