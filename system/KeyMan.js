'use strict';

export class KeyManager {
    /*
      KeyW = 0;
      KeyA = 1;
      KeyS = 2;
      KeyD = 3;
     */
    keysPressed;
    keysJustPressed;

    constructor() {
      this.keysPressed = new Array(1);
      this.keysJustPressed = new Array(1);

      document.addEventListener('keydown', (event) => {
        var code = event.code;
        this.setKeyPressed(code, true)
      }, false);
    
      document.addEventListener('keyup', (event) => {
        var code = event.code;
        this.setKeyPressed(code, false)
      }, false);
    }

    wasKeyJustPressed(code) {
      switch (code) {
        case "KeyW": return this.keysJustPressed[0];
        case "KeyA": return this.keysJustPressed[1];
        case "KeyS": return this.keysJustPressed[2];
        case "KeyD": return this.keysJustPressed[3];
        case "Slash": return this.keysJustPressed[4];
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "KeyW": return this.keysPressed[0];
        case "KeyA": return this.keysPressed[1];
        case "KeyS": return this.keysPressed[2];
        case "KeyD": return this.keysPressed[3];
        case "Slash": return this.keysPressed[4];
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyW":
          this.keysPressed[0] = pressed;
          this.keysJustPressed[0] = pressed;
          break;
        case "KeyA":
          this.keysPressed[1] = pressed;
          this.keysJustPressed[1] = pressed;
          break;
        case "KeyS":
          this.keysPressed[2] = pressed;
          this.keysJustPressed[2] = pressed;
          break;
        case "KeyD":
          this.keysPressed[3] = pressed;
          this.keysJustPressed[3] = pressed;
          break;
        case "Slash":
          this.keysPressed[4] = pressed;
          this.keysJustPressed[4] = pressed;
          break;
      }
    }

    update() {
      for (let i = 0; i < this.keysJustPressed.length; i++) {
        this.keysJustPressed[i] = false;
      }
    }

}