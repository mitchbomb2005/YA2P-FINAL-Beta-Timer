'use strict';

export class KeyManager {
    /*
      KeyW = 0;
      KeyA = 1;
      KeyS = 2;
      KeyD = 3;
     */

    keyBuffer;
    keysCurrentlyPressed;
    keysPressedLastFrame;

    constructor() {
      this.keyBuffer = new Array();
      this.keysCurrentlyPressed = new Array();
      this.keysPressedLastFrame = new Array();

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
        case "KeyW": return !this.keysPressedLastFrame[0] && this.keysCurrentlyPressed[0];
        case "KeyA": return !this.keysPressedLastFrame[1] && this.keysCurrentlyPressed[1];
        case "KeyS": return !this.keysPressedLastFrame[2] && this.keysCurrentlyPressed[2];
        case "KeyD": return !this.keysPressedLastFrame[3] && this.keysCurrentlyPressed[3];
        case "Backslash": return !this.keysPressedLastFrame[4] && this.keysCurrentlyPressed[4];
        case "KeyH": return !this.keysPressedLastFrame[5] && this.keysCurrentlyPressed[5];
        case "KeyN": return !this.keysPressedLastFrame[6] && this.keysCurrentlyPressed[6];
        case "KeyP": return !this.keysPressedLastFrame[7] && this.keysCurrentlyPressed[7];
        case "Keyf": return !this.keysPressedLastFrame[8] && this.keysCurrentlyPressed[8];
        case "ArrowUp": return !this.keysPressedLastFrame[9] && this.keysCurrentlyPressed[9];
        case "ArrowDown": return !this.keysPressedLastFrame[10] && this.keysCurrentlyPressed[10];
        case "ArrowLeft": return !this.keysPressedLastFrame[11] && this.keysCurrentlyPressed[11];
        case "ArrowRight": return !this.keysPressedLastFrame[12] && this.keysCurrentlyPressed[12];
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "KeyW": return this.keysCurrentlyPressed[0];
        case "KeyA": return this.keysCurrentlyPressed[1];
        case "KeyS": return this.keysCurrentlyPressed[2];
        case "KeyD": return this.keysCurrentlyPressed[3];
        case "Backslash": return this.keysCurrentlyPressed[4];
        case "KeyH": return this.keysCurrentlyPressed[5];
        case "KeyN": return this.keysCurrentlyPressed[6];
        case "KeyP": return this.keysCurrentlyPressed[7];
        case "Keyf": return this.keysCurrentlyPressed[8];
        case "ArrowUp": return this.keysCurrentlyPressed[9];
        case "ArrowDown": return this.keysCurrentlyPressed[10];
        case "ArrowLeft": return this.keysCurrentlyPressed[11];
        case "ArrowRight": return this.keysCurrentlyPressed[12];
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyW":
          this.keyBuffer[0] = pressed;
          break;
        case "KeyA":
          this.keyBuffer[1] = pressed;
          break;
        case "KeyS":
          this.keyBuffer[2] = pressed;
          break;
        case "KeyD":
          this.keyBuffer[3] = pressed;
          break;
        case "Backslash":
          this.keyBuffer[4] = pressed;
          break;
        case "KeyH":
          this.keyBuffer[5] = pressed;
          break;
        case "KeyN":
          this.keyBuffer[6] = pressed;
          break;
        case "KeyP":
          this.keyBuffer[7] = pressed;
          break;
        case "KeyF":
          this.keyBuffer[8] = pressed;
          break;
        case "ArrowUp":
          this.keyBuffer[9] = pressed;
          break;
        case "ArrowDown":
          this.keyBuffer[10] = pressed;            
          break;
        case "ArrowLeft":
          this.keyBuffer[11] = pressed;
          break;
        case "ArrowRight":
          this.keyBuffer[12] = pressed;
          break;
        default:
          console.log("Unexpected key code: " + code);
      }
    }

    update() {
      for (let i = 0; i < this.keyBuffer.length; i++) {
        this.keysPressedLastFrame[i] = this.keysCurrentlyPressed[i];
        this.keysCurrentlyPressed[i] = this.keyBuffer[i];
        // this.keyBuffer[i] = false;
      }
    }

}
