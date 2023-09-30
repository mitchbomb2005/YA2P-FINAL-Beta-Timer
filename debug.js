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
            this.debugMsg()
        }

    }

    hideBean() {
        if (this.keyManager.wasKeyJustPressed("KeyH")) {
            console.log("hide")
            this.bean = !this.bean
            this.debugMsg()
        }
    }

    flipNoClip() {
        if (this.keyManager.wasKeyJustPressed("KeyN")) {
            console.log("noClip")
            this.noClip = !this.noClip
            this.debugMsg()
        }
    }

    flipPlayerHitbox() {
        if (this.keyManager.wasKeyJustPressed("KeyP")) {
            console.log("playerHitbox")
            this.playerHitbox = !this.playerHitbox
            this.debugMsg()
        }
    }

    flipFreeCam() {
        if (this.keyManager.wasKeyJustPressed("Keyf")) {
            console.log("free Camera")
            this.freeCam = !this.freeCam
            this.debugMsg()
        }
    }

    debugMsg() {

        console.log("debug mode, " + this.debugMode, " ; bean visibilaty, " + this.bean, " ; noclip, " + this.noClip, " ; hitbox, " + this.playerHitbox, " ; free camera, " + this.freeCam)
    }

    

}