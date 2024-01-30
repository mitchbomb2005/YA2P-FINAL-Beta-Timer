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
        this.grid.src = 'assets/images/grid.png'
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

        //this.map.enabler.nDraw(this.camera)
        this.map.teleport.nDraw(this.camera)

        this.drawHeld()
        this.drawTheBeanPeople()

        this.map.lava.nDraw(this.camera);
        this.map.checkpoint.nDraw(this.camera) 
        this.map.ground.nDraw(this.camera);
        this.drawText()

        this.debugDraw()

        
        this.game.keys.drawKeys()

        if(this.player.anim) {
            for(let i = 0; i < this.player.orb.length; i++){
                //this.player.orb[i].update()
                this.player.orb[i].Draw()
            }
        }


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
        ctx.setTransform(scaleY * this.game.camera.zoom, 0, 0, scaleX * this.game.camera.zoom, 0, 0)
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
          ctx.setTransform(scaleY * this.game.camera.zoom, 0, 0, scaleX * this.game.camera.zoom, 0, 0)
        }
    }

    debugDraw() {
        if(this.debug.enum == true)   {this.enum()}
        if(this.debug.getPos == true) {this.getPos()}
    }

    getPos() {
        this.drawUtils.Text(Math.round(this.player.x), 100, 300, "white", "black")
        this.drawUtils.Text(Math.round(this.player.y), 100, 400, "white", "black")
    }

    drawHeld(){
        if (this.game.hook.visibility) {
            this.drawUtils.Line(
                this.game.hook.x1,
                this.game.hook.y1,
                this.game.hook.x2 + this.camera.x,
                this.game.hook.y2 + this.camera.y,/**/
                "#A06000", 
                30 + -this.game.hook.length/70, 
                true, "#6b4101" )
        }
    }

    enum() {
        for (let i = 0; i < this.map.ground.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.ground.hitboxes[i].x + this.camera.x, this.map.ground.hitboxes[i].y + this.camera.y, "white", "#0f0f0f")
        }
        for (let i = 0; i < this.map.lava.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.lava.hitboxes[i].x + this.camera.x, this.map.lava.hitboxes[i].y + this.camera.y, "white", "#500000")
        }
        for (let i = 0; i < this.map.checkpoint.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.checkpoint.hitboxes[i].x + this.camera.x, this.map.checkpoint.hitboxes[i].y + this.camera.y, "white", "rgba(0, 255, 50, 1)")
        }
        for (let i = 0; i < this.map.teleport.hitboxes.length; i++) {
            this.drawUtils.Text(i, this.map.teleport.hitboxes[i].x + this.camera.x, this.map.teleport.hitboxes[i].y + this.camera.y, "white", "#dbb000")
        }
    }

    drawTheBeanPeople() {

        for(let i = 0; i < this.game.enemy.value.length; i++) {
            this.drawUtils.Bean(
                -this.game.enemy.value[i].x + this.camera.x, 
                -this.game.enemy.value[i].y + this.camera.y, 
                50 + (this.game.enemy.value[i].avgVelY/2), 
                100 - this.game.enemy.value[i].avgVelY, 
                "#cf9f9f")
        }

        if(this.debug.bean && !this.player.hidden) {  
            if (this.player.avgVelY > 20){
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (20/2), 100 - 20, "#afbfaf") 
            } else if (this.player.avgVelY < -20){
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (-20/2), 100 + 20, "#afbfaf") 
            } else{
                this.drawUtils.Bean(-this.player.x + this.camera.x, -this.player.y + this.camera.y, 50 + (this.player.avgVelY/2), 100 - this.player.avgVelY, "#afbfaf") 
            }
        }


 
    }

}