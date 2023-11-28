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

    constructor(cam){
        this.camera = cam
        /*this.keyD.src = 'other/images/keys/D_Key_Dark.png';
        this.keyW.src = 'other/images/keys/W_Key_Dark.png';
        this.keyS.src = 'other/images/keys/S_Key_Dark.png';
        this.keyL.src = 'other/images/keys/L_Key_Dark.png'; //
        this.leftClick.src = 'other/images/keys/Mouse_Left_Key_Dark.png';
        this.keySpace.src = 'other/images/keys/Space_Key_Dark.png';
        this.warnLava.src = 'other/images/warn.png';
        this.warnGrey.src = 'other/images/warnGrey.png';
        this.redFlag.src = 'other/images/redFlag.png';
        this.hookDisabled.src = 'other/images/hookDisabled.png';
        this.hookEnabled.src = 'other/images/hookEnabled.png';*/
    }
    drawKeys() {
        ctx.drawImage(this.keyD, 388 + this.camera.x, 600 + this.camera.y) //5652.9319785986945 , -181.7023653299001
        this.jump(4480, 245)
        this.jump(3850, -410)
        this.jump(2273.265700406848 , 642.4999999999999 )
        ctx.drawImage(this.hookEnabled, 5803.8752307244795 + this.camera.x, -199.17987904329323 + this.camera.y)
        ctx.drawImage(this.redFlag, 1544.8500139551425 + this.camera.x, 67.9775041778131 + this.camera.y, 100, 100)
        ctx.drawImage(this.leftClick, 5702.9319785986945 + this.camera.x, -181.7023653299001 + this.camera.y)
    }

    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }
    
}