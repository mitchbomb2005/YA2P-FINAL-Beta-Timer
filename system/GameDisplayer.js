'use strict';

export class GameDisplayer {

    // fields
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    game;

    // constructor
    constructor(game) {
        this.game = game;
    }

    // methods (functions)
    drawGameFrame() {
        drawBean(800, 400, 50, 100) 
        drawBean(1000, 400, 100, 150)
    }
    
    #drawBean(x, y, width, height) {

        ctx.beginPath();
        ctx.arc(x + (width / 2) - 5, y + 5, width / 2 +5, 0, Math.PI * 2, false);
        ctx.fillStyle = "#e0e0e0";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(x + (width / 2) - 5, y+ (height - (width / 2)) + 5, width / 2 +5, 0, Math.PI * 2, false);
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
    
    //--------------------------------------------------------------------------------------------------------------------
    
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