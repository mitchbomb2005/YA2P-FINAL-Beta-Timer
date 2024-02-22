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
            hookII : this.game.player.hookHeldII,
            rC : this.game.gameDisplayer.targetR,
            gC : this.game.gameDisplayer.targetG,
            bC : this.game.gameDisplayer.targetB,
            rx : this.game.player.respawnX, 
            ry : this.game.player.respawnY,
            //respawnX
        
        }
    }

    update() {
        if(this.game.keyManager.isKeyPressed("ControlLeft")){
            if(this.game.keyManager.wasKeyJustPressed("KeyC")){
                this.Data = this.setData()
                console.log(this.Data)
                this.save()
            }
            if(this.game.keyManager.wasKeyJustPressed("KeyV")){
                this.load()
            }
        }
    }

    async save() {
        this.Data = this.setData()
        await navigator.clipboard.writeText(
            this.Data.x+ "\n"+
            this.Data.y+ "\n"+
            this.Data.hook+ "\n"+
            this.Data.hookII+ "\n"+
            this.Data.rC+ "\n"+
            this.Data.gC+ "\n"+
            this.Data.bC+ "\n"+
            this.Data.rx+ "\n"+
            this.Data.ry+ "\n"
        )
        console.log("save") 
    }

    async load() {
        var loadData = await navigator.clipboard.readText()
        console.log(loadData)
        var useData = loadData.split('\n')
        console.log(useData[1])

        console.log(useData, useData[2] == "true")

        this.game.player.x = Number(useData[0])
        this.game.player.y = Number(useData[1])
        this.game.player.hookHeld = (useData[2] === "true\r")
        this.game.player.hookHeldII = (useData[3] === "true\r")
        this.game.gameDisplayer.targetR = Number(useData[4])
        this.game.gameDisplayer.targetG = Number(useData[5])
        this.game.gameDisplayer.targetB = Number(useData[6])
        this.game.player.respawnX = Number(useData[7])
        this.game.player.respawnY = Number(useData[8])


        console.log(this.Save)
    }
}
