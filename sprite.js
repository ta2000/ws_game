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

    distance(obj) {
        var dx = Math.abs( (this.x + this.image.width/2) - (obj.x + obj.image.width/2) );
        var dy = Math.abs( (this.y + this.image.height/2) - (obj.y + obj.image.height/2) );
        var hypotenuse = Math.sqrt( (dx*dx) + (dy*dy) );
        return hypotenuse;
    }
}
