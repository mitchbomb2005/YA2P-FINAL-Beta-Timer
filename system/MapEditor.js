export class Edit {

    debug;
    map;
    camera;
    x;
    y;

    constructor(d, m, c) {
        this.debug = d
        this.map = m
        this.camera = c

        document.addEventListener("click", (event) => {
            this.x = clientX;
            this.y = clientY;
          }, false);
    }





}