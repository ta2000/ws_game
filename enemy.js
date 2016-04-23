"use strict";

class Enemy extends Sprite {
    constructor(img, x, y) {
        super(img, x, y);
        this.speed = 3;
    }

    update() {
        if (Game.player.x < this.x) {
            this.x-=this.speed;
        }
        if (Game.player.x > this.x) {
            this.x+=this.speed;
        }
        if (Game.player.y < this.y) {
            this.y-=this.speed;
        }
        if (Game.player.y > this.y) {
            this.y+=this.speed;
        }
    }
}
