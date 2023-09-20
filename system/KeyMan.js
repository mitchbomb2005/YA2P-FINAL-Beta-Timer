import { Camera } from "./map-camera/Camera.js"

export class keyManager {
    /*
        KeyD = 0
     */
    keysPressed;
    keysJustPressed;
    Cam = new (Camera);

    constructor() {
      this.keysPressed = new Array(1);
      this.keysJustPressed = new Array(1);
    }

    wasKeyJustPressed(code) {
      switch (code) {
        case "KeyD": return this.keysJustPressed[0]
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "KeyD": return this.keysPressed[0]
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyD":
        this.keysPressed[0] = pressed
        this.keysJustPressed[0] = pressed
      }
    }

    doActionsFromKeyInput() {
      console.log("doActionsFromKeyInput called")
      if (this.isKeyPressed("KeyD")) {
        console.log("it should move")
        this.Cam.move(10, 0, 5)
      }
    }

    onTick() {
      for (let i = 0; i < this.keysJustPressed.length; i++) {
        this.keysJustPressed[i] = false;
      }
    }
}