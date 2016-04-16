"use strict";

class Sprite {
    constructor(img, x, y) {
        this.image = new Image();
        this.image.src = img;
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}
