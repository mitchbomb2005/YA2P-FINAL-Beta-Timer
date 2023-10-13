const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Keys {
    camera;
    keyD = new Image();
    keyW = new Image();

    constructor(cam){
        this.camera = cam
        this.keyD.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/D_Key_Dark.png';
        this.keyW.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/W_Key_Dark.png';
    }
    drawKeys() {
        ctx.drawImage(this.keyD, 388 + this.camera.x, 600 + this.camera.y)
        ctx.drawImage(this.keyW, 1788 + this.camera.x, 600 + this.camera.y)
    }

    
}