'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class DrawUtils {
    
    Bean(x, y, width, height, color) {

        ctx.beginPath();
        ctx.arc(x - 5, (y + 5) - (height / 2), width / 2 +5, 0, ( Math.PI/180 ) * 190, ( Math.PI/180 ) * 180,  false);
        ctx.fillStyle = "rgba(0, 0, 0, .1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x - 5, (y + (height - (width / 2)) + 5) - (height / 2), width / 2 +5, 0, Math.PI / 1.06, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect((x - 10) - (width / 2), y - (height / 2), width + 10 , height - width / 2 + 10);
        ctx.fill();
        ctx.closePath();    


        ctx.beginPath();
        ctx.rect((x - 5) - (width / 2) , (y - 5) - (height / 2), width + 10 , height - width / 2 + 10);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, (y + (height - (width / 2))) - (height / 2) , width / 2 + 5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y - (height / 2), width / 2 +5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        // Draw inside color of bean

        ctx.beginPath();
        ctx.rect(x - (width / 2), y - (height / 2), width, height - width / 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, (y + (height - (width / 2))) - (height / 2), width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y - (height / 2), width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        
    }

    Text(text, x, y, strokeColor = 'black', fillColor = 'white') {
        ctx.font = '80px Sans-serif';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 8;
        ctx.lineJoin="miter";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = fillColor;
        ctx.fillText(text, x, y);

    }

    Line(x1, y1, x2, y2, color, width = 20, outline = true, oColor = "black", weight = 5/* */) {
        if(outline) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineWidth = width + weight
            ctx.strokeStyle = oColor;
            ctx.lineCap = "round";
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = width
        ctx.strokeStyle = color;
        ctx.lineCap = "round";
        ctx.stroke();

    }
 
    Circle(x, y, rad, color = "rgba(255, 0, 0, .5)") {
        ctx.beginPath();
        //ctx.arc()
        ctx.arc(x, y, rad, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
        //this.Text("orb", 100, 100)
    }

    Rect(x = 0, y = 0, width = 0, height = 0, color = "#000000") {
        ctx.beginPath();
        ctx.rect(x, y, width, height) 
        ctx.fillStyle = color;
        ctx.fill()
        ctx.closePath();
    }

}