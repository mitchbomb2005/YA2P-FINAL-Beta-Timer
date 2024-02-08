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

    
    hookState = false
    lastHookState = false
    hookStateChange = true
    r = 167 ; rC = 1; targetR = this.r
    b = 216 ; bC = 0; targetB = this.b
    g = 199 ; gC = ((this.b - this.g) / (this.b - this.r)) * this.rC; targetG = this.g
    loops = this.b - this.r
    i = 0
    signDisplayPos = 800
    signTextPos = 800
    signText = ["","","","","","",100]

    // , 192, 219

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
        this.hookState = this.game.player.hookHeld
        if(this.hookState != this.lastHookState) {
            this.hookStateChange = true
        }
        this.lastHookState = this.game.player.hookHeld

        this.resizeCanvasForWindowSize();
        
        this.bgFade(this.targetR, this.targetG, this.targetB)
        this.r += this.rC
        this.g += this.gC
        this.b += this.bC

        if(this.hookStateChange == true) {
            if(this.game.menu.check == true) {
                if(this.hookState == false) {
                    this.targetR = 167
                    this.targetG = 167
                    this.targetB = 167
                } else {
                    this.targetR = 167
                    this.targetG = 199
                    this.targetB = 216
                }
                this.hookStateChange = false
            }
        }
        if(!this.debug.backGrid) {
            ctx.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
            ctx.rect(0, 0, 100000, 10000) 
            ctx.fill()
            this.background.Draw()
        } else {
            //ctx.drawImage(this.grid, 0, 0, 1676,1047)
            ctx.drawImage(this.grid, 0, 0, this.originalWidth,625 * (this.originalWidth / 1000))
        }

        //this.map.enabler.nDraw(this.camera)
        this.map.teleport.nDraw(this.camera)


        
        for(let i = 0; i < this.map.sign.signs.length; i++) {
            this.map.sign.signs[i].nDraw(this.camera, this.drawUtils)
        }
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
        for(let i = 0; i < this.map.sign.signs.length; i++){
            if(this.map.sign.signs[i].interact){
                this.signText = this.map.sign.signs[i].text
                this.signText[6] = i
                this.signDisplayPos = ((this.signDisplayPos * 9) + 0 )/ 10
                this.signTextPos = ((this.signDisplayPos * 12) + 0 )/ 13

            }else if (i == this.signText[6]){
                
                this.signDisplayPos = ((this.signDisplayPos * 9) + 800 )/ 10
                this.signTextPos = ((this.signDisplayPos * 12) + 800 )/ 13
            }
        }


        this.drawUtils.Rect(0, 675 + this.signDisplayPos, 10000, 10000, "#000")
        this.drawUtils.Rect(0, 700 + this.signDisplayPos, 10000, 10000, "#555555")
        for(let j = 0; j < 6; j++){
            this.drawUtils.Text(this.signText[j], 100, (800 + (100 * j)) + this.signTextPos *(j/2 + 1))
        }

    }

    bgFade(r,g,b) {
        var rD = r - this.r 
        var gD = g - this.g
        var bD = b - this.b 

        if(Math.abs(rD) >= Math.abs(bD) && Math.abs(rD) >= Math.abs(gD))    {
            this.loops = Math.abs(rD)
} else  if(Math.abs(gD) >= Math.abs(bD) && Math.abs(gD) >= Math.abs(rD))    {
            this.loops = Math.abs(gD)
} else                                                                      {
            this.loops = Math.abs(bD)
}
        if(this.loops != 0) {
            this.rC = rD / this.loops
            this.gC = gD / this.loops
            this.bC = bD / this.loops
        } else {
            this.rC = 0
            this.gC = 0
            this.bC = 0
        }
    }

    drawText() { 
        //  this.hitboxes[this.hitboxes.length] = new Hitbox(-1380,-3287,124,74 )
        //this.drawUtils.Text("sorry for that lava part, but this is the end for now", -1680 + this.camera.x,-3387 + this.camera.y, "white", "grey")
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
            if(this.debug.extraEnum){
                this.drawUtils.Text(this.map.ground.hitboxes[i].x + ", " + this.map.ground.hitboxes[i].x, this.map.ground.hitboxes[i].x + this.camera.x + 150, this.map.ground.hitboxes[i].y + this.camera.y, "white", "#0f0f0f")
            }
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