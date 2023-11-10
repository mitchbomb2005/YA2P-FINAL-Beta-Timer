export class Hook{
    game
    enabled
    x1
    y1
    x2
    y2
    targetLength = 100
    length
    maxLength
    slope
    visibility

    constructor(game){
        this.game = game
        this.enabled = false
    }
    update() {
        this.x1 = -this.game.player.x + this.game.camera.x
        this.y1 = -this.game.player.y + this.game.camera.y - 30
        this.x2 = this.game.camera.keyMan.mousePos.x + this.game.camera.x
        this.y2 = this.game.camera.keyMan.mousePos.y + this.game.camera.y
        this.length = Math.sqrt( Math.pow( (this.x2 - this.x1), 2) + Math.pow( (this.y2 - this.y1) , 2) )  //√((x2 – x1)² + (y2 – y1)²)
        this.slope = (this.x2 - this.x1) / (this.y2 - this.y1)
        this.maxLength = 1500
        if (!this.game.debug.grappleHookTest) {
            this.enabled = false
            this.visibility = false
        }
        if (this.length > this.targetLength && this.enabled) {
            this.game.player.velX = this.game.player.velX + ((this.x1 - this.x2) / 130)
            this.game.player.velY = this.game.player.velY + ((this.y1 - this.y2) / 170) + .1
        }
        if (this.length > this.maxLength) {
            this.enabled = false
        }

    }

}