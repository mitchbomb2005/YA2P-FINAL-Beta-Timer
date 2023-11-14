const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Keys {
    camera;
    keyD = new Image();
    keyW = new Image();
    keySpace = new Image();
    keyShift = new Image();
    keyS = new Image();
    keyL = new Image();
    warnLava = new Image();
    warnGrey = new Image();
    redFlag = new Image();
    hookDisabled = new Image();
    hookEnabled = new Image();

    constructor(cam){
        this.camera = cam
        this.keyD.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/D_Key_Dark.png';
        this.keyW.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/W_Key_Dark.png';
        this.keyS.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/S_Key_Dark.png';
        this.keyL.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/L_Key_Dark.png';
        this.keySpace.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/Space_Key_Dark.png'
        this.warnLava.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/warn.png'
        this.warnGrey.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/warnGrey.png'
        this.redFlag.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/redFlag.png'
        this.hookDisabled.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/hookDisabled.png'
        this.hookEnabled.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/hookEnabled.png'
    }
    drawKeys() {
        ctx.drawImage(this.keyD, 388 + this.camera.x, 600 + this.camera.y)
        this.jump(4480, 245)
        this.jump(3850, -410)
        this.jump(2273.265700406848 , 642.4999999999999 )
        ctx.drawImage(this.hookEnabled, 5803.8752307244795 + this.camera.x, -199.17987904329323 + this.camera.y)
    }

    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }
    
}