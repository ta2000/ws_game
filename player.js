"use strict";

class Player extends Sprite {
    constructor(img, x, y) {
        super(img, x, y);
        this.speed = 5;
        this.keys = {};
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
