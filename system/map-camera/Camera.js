export class Camera {
    x;
    y;

    constructor(x, y) {
        this.x = x
        this.y = y
        
    }

    move(x, y, frames = 60) {
        for(let i = 0; i >= frames; i++)
        return new Promise(resolve => setTimeout(resolve, ms));
        this.x = this.x + (x / frames)
        this.y = this.y + (y / frames)
    }
}