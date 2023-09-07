'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var scaleX = 0;
var scaleY = 0;

export class GameDisplayer {

    // fields
    game;
    map;

    originalWidth = canvas.width;
    originalHeight = canvas.height;
    map = new Map();

    constructor(game) {
        this.game = game;
    }

    // methods (functions)
    drawGameFrame() {
        this.game.player.draw();
        this.resizeCanvasForWindowSize();
        this.drawBean(originalWidth / 2, originalHeight / 2, 50, 100) 
     // this.drawBean(1000, 400, 100, 150)
        Map.draw(Map.x, Map.y)
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



        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
  
        // Get the current window dimensions
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
    
        // Calculate the desired width and height based on the window's dimensions
        
        var desiredWidth = windowWidth;
        var aspectRatio = originalWidth / originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / originalWidth);
        scaleY = (desiredHeight / originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
  
         currentWidth = canvas.width;
         currentHeight = canvas.height;
  
        if (currentHeight >= windowHeight) {
           desiredHeight = windowHeight;
           aspectRatio = originalWidth / originalHeight;
           desiredWidth = desiredHeight * aspectRatio;
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          scaleX = (desiredWidth / originalWidth);
          scaleY = (desiredHeight / originalHeight);
          ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
        }
    }

}