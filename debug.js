export class Debug {

    debugMode = false
    bean = true
    noClip = false
    playerHitbox = false
    freeCam = false
    keyManager;

    constructor(keyMan) {
        this.keyManager = keyMan
    }

    update() {

        if(!this.debugMode) {
            this.debugCheck()
        }else{
            this.hideBean();
            this.flipNoClip();
            this.flipPlayerHitbox();
            this.flipFreeCam();
        }

    }

    debugCheck() {
        
        if (this.keyManager.isKeyPressed("Backslash")) {
            this.debugMode = true
            console.log("debug mode enabled");
        }

    }

    hideBean() {
        if (this.keyManager.wasKeyJustPressed("KeyH")) {
            console.log("hide")
            this.bean = !this.bean
        }
    }

    flipNoClip() {
        if (this.keyManager.wasKeyJustPressed("KeyN")) {
            console.log("noClip")
            this.noClip = !this.noClip
        }
    }

    flipPlayerHitbox() {
        if (this.keyManager.wasKeyJustPressed("KeyP")) {
            console.log("playerHitbox")
            this.playerHitbox = !this.playerHitbox
        }
    }

    flipFreeCam() {
        console.log("freecam called")
        if (this.keyManager.wasKeyJustPressed("KeyF")) {
            console.log("free Camera")
            this.playerHitbox = !this.freeCam
        }
    }

    

}