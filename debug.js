export class Debug {

    debugMode = false
    bean = true

    constructor(KeyMan) {
        keyManager = KeyMan
    }

    Update() {

        if(!debugMode) {
            this.debugCheck()
        }
        if(debugMode) {
            this.hidebean()
        }

    }

    debugCheck() {
        
        if (this.keyManager.isKeyPressed("Slash")){
            debugMode = true
            console.log("debug mode enabled");
        }

    }

    hideBean() {
        if (this.keyManager.isKeyPressed(KeyH)) {
            this.bean = !this.bean
        }
    }

}