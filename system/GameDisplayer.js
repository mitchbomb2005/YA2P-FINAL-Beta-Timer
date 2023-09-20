'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var scaleX = 0;
var scaleY = 0;
import { Map } from "./map-camera/Map.js"
import { Camera } from "./map-camera/Camera.js"
import { Draw } from "./map-camera/Saved_Shapes.js"

export class GameDisplayer {

    
    // fields
    game;

    originalWidth = canvas.width;
    originalHeight = canvas.height;

    Map = new Map();
    Cam = new Camera(0, 0);
    Draw = new Draw()

    constructor(game) {
        this.game = game;
    }

    // methods (functions)
    drawGameFrame() {

        this.game.player.draw(ctx);
        this.resizeCanvasForWindowSize();
        ctx.fillStyle = "#90b0c0";
        ctx.rect(0, 0, 10000, 10000) 
        ctx.fill()
        this.Draw.Bean(this.originalWidth / 2, this.originalHeight / 2, 50, 100) 
     // this.drawBean(1000, 400, 100, 150)
        this.Map.draw(this.Cam.x, this.Cam.y)
    }
    
    /*
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
*/

    // don't alter this, just ignore it
    // we don't kow how it works, it just does

    resizeCanvasForWindowSize() {
        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var desiredWidth = windowWidth;
        var aspectRatio = this.originalWidth / this.originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / this.originalWidth);
        scaleY = (desiredHeight / this.originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
         currentWidth = canvas.width;
         currentHeight = canvas.height;
        if (currentHeight >= windowHeight) {
           desiredHeight = windowHeight;
           aspectRatio = this.originalWidth / this.originalHeight;
           desiredWidth = desiredHeight * aspectRatio;
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          scaleX = (desiredWidth / this.originalWidth);
          scaleY = (desiredHeight / this.originalHeight);
          ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
        }
    }

}