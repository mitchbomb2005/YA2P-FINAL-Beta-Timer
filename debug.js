export class Debug {

    bean = true
    noClip = false
    playerHitbox = false
    freeCam = false
    mapBuilder = false
    grappleHookTest = true
    backGrid = false

    keyManager;

    constructor(keyMan) {
        this.keyManager = keyMan
    }

    update() {
        if (this.keyManager.isKeyPressed("Backslash")) {
            this.hideBean()
            this.flipNoClip()
            this.flipPlayerHitbox()
            this.flipFreeCam()
            this.flipMapMaker()
            this.flipGrappleHookTest()
            this.flipBackGrid()
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
        if (this.keyManager.wasKeyJustPressed("KeyF")) {
            console.log("free Camera")
            this.freeCam = !this.freeCam
        }
    }

    flipMapMaker() {
        if (this.keyManager.wasKeyJustPressed("KeyM")) {
            console.log("map editor")
            this.mapBuilder = !this.mapBuilder
            if (this.keyManager.isKeyPressed("ShiftLeft")) {
                if (this.mapBuilder == true) {
                    this.grappleHookTest = false
                    this.noClip = true
                    this.bean = false
                } else {
                    this.grappleHookTest = true
                    this.noClip = false
                    this.bean = true
                }
            }
        }
    }

    flipBackGrid() {
        if (this.keyManager.wasKeyJustPressed("KeyB")) {
            console.log("grid")
            this.backGrid = !this.backGrid
        }
    }

    flipGrappleHookTest() {
        if (this.keyManager.wasKeyJustPressed("KeyG")) {
            console.log("Grapple")
            this.grappleHookTest = !this.grappleHookTest
        }
    }
    

}