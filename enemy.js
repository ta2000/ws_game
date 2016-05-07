"use strict";

class Enemy extends Sprite {
    constructor(img, x, y) {
        super(img, x, y);
        this.speed = 2;
    }

    update() {
        if (Game.entities.player.x < this.x) {
            this.x-=this.speed;
        }
        if (Game.entities.player.x > this.x) {
            this.x+=this.speed;
        }
        if (Game.entities.player.y < this.y) {
            this.y-=this.speed;
        }
        if (Game.entities.player.y > this.y) {
            this.y+=this.speed;
        }

        // Check collision with player
        if (this.distance(Game.entities.player) < 64) {
            Game.entities.player.hp--;
        }
    }
}
