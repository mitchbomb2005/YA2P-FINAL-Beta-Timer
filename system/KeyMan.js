let keyManager = {
    /*
        KeyD = 0
     */
    keysPressed : new Array(1),
    keysJustPressed : new Array(1),

    wasKeyJustPressed(code) {
      switch (code) {
        case "KeyD": return this.keysJustPressed[0]
      }
    },

    isKeyPressed(code) {
      switch (code) {
        case "KeyD": return this.keysPressed[0]
        }
    },

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyD":
        this.keysPressed[0] = pressed
        this.keysJustPressed[0] = pressed

        }
    },

    doActionsFromKeyInput() {
          if (this.isKeyPressed("KeyD")) {
            func()
          }
    }
}