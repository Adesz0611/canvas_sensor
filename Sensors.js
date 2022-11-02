class SoundSensor {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw(ctx, player) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        if(this.intersectWithPlayer(player) && (player.vy != 0 || player.vx != 0)) {
            switch(player.speed) {
                case 2:
                    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                    break;
                case 4:
                    ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
                    break;
                case 6:
                    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                    break;
                default:
                    
                    break;
            }
        }
        
        ctx.fill();
        ctx.closePath();
    }

    intersectWithPlayer(player) {
        let testX = this.x;
        let testY = this.y;

        if (this.x < player.x) { testX = player.x; }
        else if (this.x > player.x+player.w) testX = player.x+player.w;
        if (this.y < player.y)         testY = player.y;
        else if (this.y > player.y+player.h) testY = player.y+player.h;

        let distX = this.x-testX;
        let distY = this.y-testY;
        let distance = Math.sqrt( (distX*distX) + (distY*distY) );

        if (distance <= this.r) {
            return true;
        }
        return false;
    }
};

class PassageSensor {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx, player) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "rgba(255,105,180, 0.3)";
        if (this.AABB(player)) {
            ctx.fillStyle = "rgba(255,105,180, 1)";
        }
        ctx.fill();
        ctx.closePath();
    }

    AABB(player) {
        return (this.x < player.x + player.w &&
                this.x + this.w > player.x &&
                this.y < player.y + player.h &&
                this.h + this.y > player.y);
    }
}

export {SoundSensor, PassageSensor};