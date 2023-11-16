export class Storage{

    game
    accessible
    Save

    constructor(game) {
        this.game = game
    }

    check() {
        if (this.accessible == undefined){
            console.log(undefined)
            return
        }
        if (localStorage.getItem("Save") == "") {
            this.Save = localStorage.getItem("Save")
            console.log ("save cloud")
            this.load()
        }
    }

    update() {
        if(this.game.keyManager.isKeyPressed("ShiftLeft")){
            if(this.game.keyManager.wasKeyJustPressed("KeyK")){
                this.save()
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyL")){
                this.load()
            }
        }
    }

    save() {
        this.Save.playerX = this.game.player.x
        this.Save.playerY = this.game.player.y
            console.log("save")
            localStorage.setItem("Save", this.Save);
    }

    load() {
        this.game.player.x = this.Save.playerX
        this.game.player.y = this.Save.playerY
        console.log(this.Save)
    }
}