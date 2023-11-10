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
        if (localStorage.getItem("Save")) {
            this.Save = localStorage.getItem("Save")
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
        console.log("fake save")
    }

    load() {
        console.log("fake load")
    }
}