"use strict";

class Player extends Sprite {
    constructor(img, x, y) {
        super(img, x, y);
        this.speed = 5;
        this.keys = {};
        this.hp = 100;
    }

    draw(ctx) {
        Sprite.prototype.draw.call(this, ctx);
        ctx.fillStyle = "lime";
        ctx.fillRect(50, 50, this.hp*5, 30);
    }

    update() {
        if (65 in this.keys) {
            this.x-=this.speed;
        }
        if (68 in this.keys) {
            this.x+=this.speed;
        }
        if (87 in this.keys) {
            this.y-=this.speed;
        }
        if (83 in this.keys) {
            this.y+=this.speed;
        }
    }
}
