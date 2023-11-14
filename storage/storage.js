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
        if (localStorage.getItem("Save") != "") {
            this.Save = localStorage.getItem("Save")
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
        this.save.playerX = this.game.player.x
        this.save.playerY = this.game.player.y

        if(localStorage) {
            localStorage.setItem("Save", this.Save);
        }
    }

    load() {
        this.game.player.x = this.save.playerX
        this.game.player.y = this.save.playerY
        console.log(this.Save)
    }
}