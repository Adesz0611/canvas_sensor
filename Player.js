class Player {
    constructor(x, y, w, h, speed = 1) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = 0;
        this.vy = 0;
        this.speed = speed;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.closePath();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}

export default Player;