
const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class sign{
    x; y; text;
    width; height;
    tipSize = 0
    tipOffset = 100
    interact = false
    sign = new Image();
    tip = new Image()

    constructor(x = 0, y = 0, text = ["placeholder", "line 2"], width = 175 + 25, height = 175 + 25) {
        this.x = x -13
        this.y = y -25
        this.text = text 
        this.width = width 
        this.height = height 
        this.sign.src = 'assets/images/sign.png';
        this.tip.src = 'assets/images/keys/E_Key_Dark.png';
    }
    // this.hitboxes[this.hitboxes.length] = new Hitbox(711,411,212,175 )
 
    nDraw(camera, utils) {
        ctx.drawImage(this.sign, this.x + camera.x, this.y + camera.y, this.width, this.height)
        ctx.drawImage(this.tip, this.x + camera.x + this.width * (1/2) - this.tipSize / 2, this.y + camera.y - this.tipSize / 1.1, this.tipSize, this.tipSize)
    }

    update(player, keyman) {
        if(-player.x > this.x && -player.x < this.x + this.width && -player.y > this.y && -player.y < this.y + this.height) {
            this.tipSize = (this.tipSize * 9 + 100) /10
            if(keyman.wasKeyJustPressed("KeyE")){
                this.interact = !this.interact
            }
        } else {
            this.tipSize = (this.tipSize * 9 + 0) /10
            this.interact = false
        }
    }
}