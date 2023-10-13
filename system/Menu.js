const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { DrawUtils } from "../utils/DrawUtils.js"

export class Menu {

    draw = DrawUtils

    constructor() {}

    drawMenu() {
        this.draw.text("hello!", 500, 500, 'white', 'grey')
    }

}