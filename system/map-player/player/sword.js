export class Sword{
    game

    enabled = false ; visibility = false
    x1 ; x2
    y1 ; y2
    length ; targetLength = 0 ; maxLength = 2000
    trajectory = new Object() ; speed = 80 ; threshold = 5 ; motion
    slope
    hitNum
    fixed = false
    yTopCompare = 0 ; xLeftCompare = 0 ; yBottomCompare = 0 ; xRightCompare = 0

    constructor(game){
        this.game = game
        this.enabled = false
        this.visibility = false
    }
    update() {
        /*this.game.drawUtils.Text(this.yTopCompare, 100, 100)
        this.game.drawUtils.Text(this.yBottomCompare, 200, 200)
        this.game.drawUtils.Text(this.xLeftCompare, 300, 300)
        this.game.drawUtils.Text(this.xRightCompare, 400, 400)*/
        this.x1 = -this.game.player.x + this.game.camera.x
        this.y1 = -this.game.player.y + this.game.camera.y - 15

        this.length = Math.sqrt( Math.pow( ((this.x2 + this.game.camera.x) - this.x1), 2) + Math.pow( ((this.y2 + this.game.camera.y) - this.y1) , 2) )  //√((x2 – x1)² + (y2 – y1)²)
        
        // console.log((this.game.camera.keyMan.mousePos.x + this.game.camera.x) - (-this.game.player.x + this.game.camera.x))

        
        if(this.motion) {
            this.move(this.trajectory.x, this.trajectory.y)
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
        this.fixed = false
        

    }

    #collisionCheck(type, i) {
        if (
            (   this.y2 >= type.hitboxes[i].y                              && 
                this.y2 <= type.hitboxes[i].y + type.hitboxes[i].height)   &&
            (   this.x2 >= type.hitboxes[i].x                              && 
                this.x2 <= type.hitboxes[i].x + type.hitboxes[i].width)
        ) {this.hitNum = i;return true} else {return false}
    }



    colide(){
        if (this.visibility && !this.fixed){

            for (let i = 0; i < this.game.map.ground.hitboxes.length; i++){
                    if(this.#collisionCheck(this.game.map.ground, i)){



                    }
            }

            for (let i = 0; i < this.game.map.lava.hitboxes.length; i++){
                if(this.#collisionCheck(this.game.map.lava, i)){

    
                }
            }
        }
    }

    move(x, y){

        this.x2 = (this.x1 - this.game.camera.x) + (x * 150)
        this.y2 = (this.y1 - this.game.camera.y) + (y * 150)

    }

}
