'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class GameDisplayer {

    // fields
    game;

    // constructor
    constructor(game) {
        this.game = game;
    }

    // methods (functions)
    drawGameFrame() {
        this.resizeCanvasForWindowSize();
        this.drawBean(800, 400, 50, 100) 
        this.drawBean(1000, 400, 100, 150)
    }
    
    drawBean(x, y, width, height) {

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

    resizeCanvasForWindowSize() {

        const originalWidth = canvas.width;
        const originalHeight = canvas.height;
    
        // Get the current window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // Calculate the desired width and height based on the window's dimensions
        const desiredWidth = windowWidth;
        const aspectRatio = originalWidth / originalHeight;
        const desiredHeight = desiredWidth / aspectRatio;
    
        // Set the canvas element's width and height
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
    
        // Resize the canvas drawing area to maintain the aspect ratio
        const scaleX = desiredWidth / originalWidth;
        const scaleY = desiredHeight / originalHeight;
    
        // Apply the scaling transformation to maintain the aspect ratio
        ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0)
    }

}