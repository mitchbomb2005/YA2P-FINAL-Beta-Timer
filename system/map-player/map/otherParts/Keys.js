const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Keys {
    camera;
    keyD = new Image();
    keyW = new Image();
    keySpace = new Image();
    warnLava = new Image();
    warnGrey = new Image();

    constructor(cam){
        this.camera = cam
        this.keyD.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/D_Key_Dark.png';
        this.keyW.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/W_Key_Dark.png';
        this.keySpace.src = 'https://raw.githubusercontent.com/loglot/key-images/main/Keyboard%20%26%20Mouse/Dark/Space_Key_Dark.png'
        this.warnLava.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/warn.png'
        this.warnGrey.src = 'https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/images/warnGrey.png'
    }
    drawKeys() {
        ctx.drawImage(this.keyD, 388 + this.camera.x, 600 + this.camera.y)
        this.jump(1788, 600)
        ctx.drawImage(this.warnLava, 2778 + this.camera.x, 300 + this.camera.y)
        ctx.drawImage(this.warnLava, 3478 + this.camera.x, 300 + this.camera.y)
        ctx.drawImage(this.warnGrey, -100 + this.camera.x, 600 + this.camera.y)
        ctx.drawImage(this.warnGrey, -650 + this.camera.x, 600 + this.camera.y) //4614.999243608894 , -268.5449578291483
        this.jump(4615 , -270)
    }

    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }
    
}