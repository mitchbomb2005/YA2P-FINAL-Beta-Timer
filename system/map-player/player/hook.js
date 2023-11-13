export class Hook{
    game

    enabled = false ; visibility = false
    x1 ; x2
    y1 ; y2
    length ; targetLength = 100 ; maxLength = 2000
    trajectory = new Object() ; speed = 80 ; threshold = 5 ; motion
    slope
    hitNum

    constructor(game){
        this.game = game
        this.enabled = false
        this.visibility = false
    }
    update() {
        this.x1 = -this.game.player.x + this.game.camera.x
        this.y1 = -this.game.player.y + this.game.camera.y - 15

        this.length = Math.sqrt( Math.pow( ((this.x2 + this.game.camera.x) - this.x1), 2) + Math.pow( ((this.y2 + this.game.camera.y) - this.y1) , 2) )  //√((x2 – x1)² + (y2 – y1)²)
        
        // console.log((this.game.camera.keyMan.mousePos.x + this.game.camera.x) - (-this.game.player.x + this.game.camera.x))

        
        if(this.motion) {
            this.x2 = this.x2 + (this.trajectory.x * this.speed);
            this.y2 = this.y2 + (this.trajectory.y * this.speed);
        }

        if (this.visibility){
            for (let i = 0; i < this.game.map.hitboxes.length; i++){
                if(this.#collisionCheck(this.game.map, i)){
                    this.enabled = true
                    this.motion = false
                    this.fixPos(this.game.map, i)
                }
            }
        }
        
        

        if (!this.game.debug.grappleHookTest) {
            this.enabled = false
            this.visibility = false
        }

        if (this.length > this.targetLength && this.enabled) {
            this.game.player.velX = this.game.player.velX + ((this.x1 - (this.x2 + this.game.camera.x)) / 130)
            this.game.player.velY = this.game.player.velY + ((this.y1 - (this.y2 + this.game.camera.y)) / 170) + .1
        }

        if (this.length > this.maxLength) {
            this.enabled = false
            this.visibility = false
        }

    }

    mouseUpdate(){

        const diffX = this.game.camera.keyMan.mousePos.x + this.game.player.x;
        const diffY = this.game.camera.keyMan.mousePos.y + this.game.player.y; 
        const mouseDistance = (diffX ** 2 + diffY ** 2) ** 0.5;

        this.trajectory.x = mouseDistance < this.threshold ? 0 : diffX / mouseDistance;
        this.trajectory.y = mouseDistance < this.threshold ? 0 : diffY / mouseDistance;

        //this.trajectory.x = (this.game.camera.keyMan.mousePos.x) - (-this.game.player.x)
        //this.trajectory.y = (this.game.camera.keyMan.mousePos.y) - (-this.game.player.y)
        this.x2 = -this.game.player.x
        this.y2 = -this.game.player.y
        

    }

    #collisionCheck(type, i) {
        if (
            (   this.y2 >= type.hitboxes[i].y                              && 
                this.y2 <= type.hitboxes[i].y + type.hitboxes[i].height)   &&
            (   this.x2 >= type.hitboxes[i].x                              && 
                this.x2 <= type.hitboxes[i].x + type.hitboxes[i].width)
        ) {this.hitNum = i;return true} else {return false}
    }

    fixPos(type, i) {
        var yTopCompare     = this.y2 - type.hitboxes[i].y
        var xLeftCompare    = this.x2 - type.hitboxes[i].x
        var yBottomCompare  = this.y2 - (type.hitboxes[i].y + type.hitboxes[i].height)
        var xRightCompare   = this.x2 - (type.hitboxes[i].x + type.hitboxes[i].width)

        if (
            yTopCompare == 0        ||
            xLeftCompare == 0       ||
            yBottomCompare == 0     ||
            xRightCompare == 0
        ) {return}
        
        if (
            yTopCompare < yBottomCompare       &&
            yTopCompare < xLeftCompare         &&
            yTopCompare < xRightCompare        
        ) {
            this.y2 = type.hitboxes[i].y  
        } else if (
            yBottomCompare < xLeftCompare      &&
            yBottomCompare < xRightCompare
        ) {
            this.y2 = type.hitboxes[i].y + type.hitboxes[i].height
        }else if (
            xLeftCompare < xRightCompare
        ) {
            this.x2 = type.hitboxes[i].x
        } else {
            this.x2 = type.hitboxes[i].x + type.hitboxes[i].width
        }

        console.log(yTopCompare, yBottomCompare, xLeftCompare, xRightCompare)
    }

}
