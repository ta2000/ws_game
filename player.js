"use strict";

class Player extends Sprite {
    constructor(img, x, y) {
        super(img, x, y);
        this.speed = 5;
        this.keys = {};
        this.hp = 100;
        this.maxHp = 100;
        this.bullets = [];
    }

    shoot(x, y) {
        this.bullets.push(new Bullet(this.x, this.y, x, y, 5));
    }

    draw(ctx) {
        Sprite.prototype.draw.call(this, ctx);

        // Draw all bullets
        for (var i=0; i<this.bullets.length; i++) {
            this.bullets[i].draw(ctx);
        }

        // Draw health bar
        var healthBarX = 50;
        var healthBarY = Game.canvas.height - 80;
        ctx.fillStyle = "black";
        ctx.fillRect(healthBarX-5, healthBarY-5, this.maxHp*5+10, 40);
        ctx.fillStyle = "red";
        ctx.fillRect(healthBarX, healthBarY, this.maxHp*5, 30);
        ctx.fillStyle = "lime";
        ctx.fillRect(healthBarX, healthBarY, this.hp*5, 30);
    }

    update() {
        // Check if dead
        if (this.hp <= 0) {
            alert("Game over");
            location.reload();
        }

        // Update all bullets
        for (var i=0; i<this.bullets.length; i++) {
            this.bullets[i].update();
        }

        // Key handling
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
