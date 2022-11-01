import Game from "./Game.js";

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
        this.vx = 0;
        this.vy = 0;

        if(Game.keys[Game.Key.Left]) {
            this.vx = -this.speed;
        }
    
        if(Game.keys[Game.Key.Right]) {
            this.vx = this.speed;
        }
    
        if(Game.keys[Game.Key.Up]) {
            this.vy = -this.speed;
        }
    
        if(Game.keys[Game.Key.Down]) {
            this.vy = this.speed;
        }

        this.x += this.vx;
        this.y += this.vy;
    }
}

export default Player;