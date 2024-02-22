export class Storage{

    game
    accessible
    Save
    Data

    constructor(game) {
        this.game = game
    }

    check() {
    }

    setData(){
        return{
            
            x : this.game.player.x, 
            y : this.game.player.y,
            hook : this.game.player.hookHeld,
            hookII : this.game.player.hookHeldII
        
        }
    }

    update() {
        if(this.game.keyManager.isKeyPressed("ControlLeft")){
            if(this.game.keyManager.wasKeyJustPressed("KeyC")){
                this.Data = this.setData().toString()
                console.log(this.Data)
                this.save()
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyV")){
                this.load()
            }
        }
    }

    async save() {
        this.Data = this.setData().toString()
        await navigator.clipboard.writeText(
            this.Data
        )
        console.log("save") 
    }

    load() {
        this.game.player.x = this.Save.playerX
        this.game.player.y = this.Save.playerY
        console.log(this.Save)
    }
}