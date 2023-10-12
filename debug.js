export class Debug {

    bean = true
    noClip = false
    playerHitbox = false
    freeCam = false
    mapBuilder = false
    keyManager;

    constructor(keyMan) {
        this.keyManager = keyMan
    }

    update() {
        if (this.keyManager.isKeyPressed("Backslash")) {
            this.hideBean();
            this.flipNoClip();
            this.flipPlayerHitbox();
            this.flipFreeCam();
            this.flipMapMaker()
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

    flipMapMaker() {
        if (this.keyManager.wasKeyJustPressed("KeyM")) {
            console.log("map editor")
            this.mapBuilder = !this.mapBuilder
            this.debugMsg()
        }
    }

    debugMsg() {

        console.log("debug mode, " + this.debugMode, " ; bean visibilaty, " + this.bean, " ; noclip, " + this.noClip, " ; hitbox, " + this.playerHitbox, " ; free camera, " + this.freeCam)
    }

    

}