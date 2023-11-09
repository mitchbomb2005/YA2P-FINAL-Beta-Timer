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
    
    // fields
    originalWidth = canvas.width;
    originalHeight = canvas.height;

    drawUtils = new DrawUtils();
    background

    constructor(Game, Map, Camera, Player, Debug = 0, DM, BG, CPM, TP, game) {
        this.game = Game;
        this.map = Map;
        this.deathMap = DM
        this.camera = Camera;
        this.debug = Debug
        this.player = Player
        this.background = BG
        this.checkpoint = CPM
        this.teleport = TP
    }

    // methods (functions)
    drawGameFrame() {

        this.resizeCanvasForWindowSize();
        ctx.fillStyle = "#a7c7d8";
        ctx.rect(0, 0, 10000, 10000) 
        ctx.fill()
        this.background.Draw()
        this.teleport.draw(this.camera.x, this.camera.y)
        if(this.debug.bean && !this.player.hidden) {
            this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50, 100) 
        }
        this.deathMap.draw(this.camera.x, this.camera.y);
        this.checkpoint.draw(this.camera.x, this.camera.y) 
        this.map.draw(this.camera.x, this.camera.y);
        this.drawText()
        if (this.debug.grappleHookTest) {
            if (this.game.hook.enabled){
                this.drawUtils.Line(
                    this.game.hook.x1, 
                    this.game.hook.y1,
                    this.camera.keyMan.mousePos.x + this.camera.x, 
                    this.camera.keyMan.mousePos.y + this.camera.y,/**/ 
                    "#A06000")
            }
        }
    }

    drawText() { 
    }
    
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