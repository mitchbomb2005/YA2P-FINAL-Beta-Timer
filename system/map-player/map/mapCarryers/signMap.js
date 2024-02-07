import { sign } from "../../sign.js"
export class signMaker {
    signs = new Array()
    constructor() {
        this.constructSigns()
    }
    constructSigns(){ 
        this.signs[0] = new sign(711,411,["this is a placeholder for how a sign works", "i can do multiple things with this", "", "and what can you do to stop me?", "",  "                         - the sign maker"])
    }
    update(player, keyman) {
        for(let i = 0; i < this.signs.length; i++) {
            this.signs[i].update(player, keyman)
        }
    }
}