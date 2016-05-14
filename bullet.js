class Bullet {
    constructor(x, y, targetX, targetY, speed) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = speed;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, 4, 4);
    }

    update() {
        var direction = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        this.x+=Math.cos(direction)*this.speed;
        this.y+=Math.sin(direction)*this.speed;
    }
}
