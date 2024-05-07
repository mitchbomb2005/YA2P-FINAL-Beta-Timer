export class TimeUtils{
    game
    constructor(game){
        this.game = game
    }
    
    perform = 0
    deltaTime
    tick(){
        this.perform = performance.now()
    }
}