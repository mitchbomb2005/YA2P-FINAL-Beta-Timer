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
    leftClick = new Image()

    constructor(cam, root){
        this.camera = cam
        this.keyD.src = 'assets/images/keys/D_Key_Dark.png';
        this.keyW.src = 'assets/images/keys/W_Key_Dark.png';
        this.keyS.src = 'assets/images/keys/S_Key_Dark.png';
        this.keyL.src = 'assets/images/keys/L_Key_Dark.png'; //
        this.leftClick.src = 'assets/images/keys/Mouse_Left_Key_Dark.png';
        this.keySpace.src = 'assets/images/keys/Space_Key_Dark.png';
        this.warnLava.src = 'assets/images/warn.png';
        this.warnGrey.src = 'assets/images/warnGrey.png';
        this.redFlag.src = 'assets/images/redFlag.png';
        this.hookDisabled.src = 'assets/images/hookDisabled.png';
        this.hookEnabled.src = 'assets/images/hookEnabled.png';
        this.game = root
    }
    drawKeys() {

        if(this.game.debug.shortsMap) {} else {
            this.drawMisc()
            this.hookTip(5347,-621)
            this.hookTip(13821,-2632)
            
            this.jump(2273, 642)
            this.jump(5419, 644)

            this.jump(8150,188)
            this.jump(7533,-389)
            
        }

    } // 8779, 269
 

    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }

    hookTip(x, y, type){
        ctx.drawImage(this.leftClick, x + this.camera.x, y + this.camera.y)
        this.hookState(x+100 + this.camera.x, y + this.camera.y)
    }
    hookState(x, y) {
        if(this.game.player.hookHeld) {
            ctx.drawImage(this.hookEnabled, x, y)
        } else {
            ctx.drawImage(this.hookDisabled, x, y)
        }
    }

    drawMisc(){
        this.drawImage(this.keyD, 388, 600)
        this.drawImage(this.keyS, 17620, -3280)
        this.drawImage(this.keyW, 17620, -3380)
        this.drawImage(this.warnLava, 5976, -1211)
        this.drawImage(this.warnLava, 5976, -811)
        this.drawImage(this.warnLava, 5976, -1611)
        this.hookState(11302 + this.camera.x, -2227 + this.camera.y)
       // ctx.drawImage(this.hookEnabled, 8779 + this.camera.x, 269 + this.camera.y)
    }

    drawImage(img, x, y) {
        ctx.drawImage(img, x +this.camera.x, y + this.camera.y)
    }
    
}

/*








 */