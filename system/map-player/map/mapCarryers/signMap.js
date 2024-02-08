import { sign } from "../../sign.js"
export class signMaker {
    signs = new Array()
    constructor() {
        this.constructSigns()
    }
    constructSigns(){ 
        this.signs[0] = new sign(3821,411,["Hello There!", "This Is A Hard, But Fun Game", "If You Can't Beat Something, Try Again Until You Complete it", "", "You Can Do This",  "                                - The Sign Maker"])
        this.signs[1] = new sign(4604 ,-5138 - 150, ["You Have Successfully Found A Secret!", "However, This Secret Is Not Complete.", "I Will Continue Working On It Until It's Done", "I Hope You Like What You See So Far!", "", "                                - The Sign Maker"])

// this.hitboxes[this.hitboxes.length] = new Hitbox(,424,17,58 )
 
    }
    update(player, keyman) {
        for(let i = 0; i < this.signs.length; i++) {
            this.signs[i].update(player, keyman)
        }
    }
}