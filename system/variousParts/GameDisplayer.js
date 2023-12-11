'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var scaleX = 0;
var scaleY = 0;

// import { Map }
// import { Camera }
import { DrawUtils } from "../../utils/DrawUtils.js"

export class GameDisplayer {

    // system
    game;
    map;
    camera;
    debug;
    player; 
    deathMap;
    teleport
    grid = new Image()
    
    // fields
    originalWidth = canvas.width;
    originalHeight = canvas.height;

    drawUtils = new DrawUtils();
    background

    constructor(Game, Map, Camera, Player, Debug = 0, DM, BG, CPM, TP, game) {
        this.game = Game;
        this.map = Map;
        this.camera = Camera;
        this.debug = Debug
        this.player = Player
        this.background = BG
        this.grid.src = 'other/images/grid.png'
    }

    // methods (functions)
    drawGameFrame() {

        this.resizeCanvasForWindowSize();
        if(!this.debug.backGrid) {
            ctx.fillStyle = "#a7c7d8";
            ctx.rect(0, 0, 100000, 10000) 
            ctx.fill()
            this.background.Draw()
        } else {
            //ctx.drawImage(this.grid, 0, 0, 1676,1047)
            ctx.drawImage(this.grid, 0, 0, this.originalWidth,625 * (this.originalWidth / 1000))
        }

        this.drawHeld()
        
        this.map.teleport.draw(this.camera.x, this.camera.y)
        if(this.debug.bean && !this.player.hidden) {  
            if (this.player.avgVelY > 20){
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (20/2), 100 - 20) 
            } else if (this.player.avgVelY < -20){
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (-20/2), 100 + 20) 
            } else{
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (this.player.avgVelY/2), 100 - this.player.avgVelY) 
            }
            
            
        }
        this.map.lava.draw(this.camera.x, this.camera.y);
        this.map.checkpoint.draw(this.camera.x, this.camera.y) 
        this.map.ground.draw(this.camera.x, this.camera.y);
        this.drawText()

    }

    drawText() { 
    }
    
    // don't alter this, just ignore it
    // we don't kow how it works, it just does
    // i tried to alter it, but i failed
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

    drawHeld(){
        if (this.game.hook.visibility) {
            this.drawUtils.Line(
                this.game.hook.x1,
                this.game.hook.y1,
                this.game.hook.x2 + this.camera.x,
                this.game.hook.y2 + this.camera.y,/**/
                "#A06000",
                30 + -this.game.hook.length/70)
        }

        if (this.game.sword.visibility) {
            this.drawUtils.Line(
                this.game.sword.x1,
                this.game.sword.y1,
                this.game.sword.x2 + this.camera.x,
               this.game.sword.y2 + this.camera.y,/**/
               "#aaaaaa",
                30 + -this.game.sword.length/70)
        }
    }

}