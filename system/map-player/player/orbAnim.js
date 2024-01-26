export class Orb{
    x; velX = 0
    y; velY = 0
    velChange = 0
    avgSize = 0
    size = 4
    draw
    player
    hidden = false
    constructor(x, y, size, player) {
        this.x = x
        this.y = y
        this.size = size
        this.player = player
        this.draw = player.game.drawUtils
    }
    Draw() {
        if(!this.hidden){
            this.draw.Circle(-this.x + this.player.camera.x, -this.y + this.player.camera.y, this.avgSize, "#fff")
        }
        //this.draw.Circle(100, 100, 100, "#fff")
    }
    update() {
        if(this.player.x < this.x){
            this.velX += this.velChange
        }
        if(this.player.x > this.x){
            this.velX -= this.velChange
        }
        if(this.player.y < this.y){
            this.velY += this.velChange
        }
        if(this.player.y > this.y){
            this.velY -= this.velChange
        }
        this.velChange += .01
        this.velX = this.velX * .97
        this.velY = this.velY * .97
        this.x -= this.velX
        this.y -= this.velY

        this.size = (Math.abs(this.player.x - this.x) + Math.abs(this.player.y - this.y)) / 25 
        this.avgSize = (this.avgSize * 7 + this.size) / 8
        if (this.size <= 3) {
            this.hidden = true
        }
        //this.Draw()
    }
}