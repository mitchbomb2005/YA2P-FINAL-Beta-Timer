import { Map } from "./Map.js"

export class keyManager {
    /*
        KeyD = 0
     */
    keysPressed;
    keysJustPressed;
    Map = new (Map);

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
      if (this.isKeyPressed("KeyD")) {
        this.Map.move(10, 0, 5)
      }
    }

    onTick() {
      for (let i = 0; i < this.keysJustPressed.length; i++) {
        this.keysJustPressed[i] = false;
      }
    }
}