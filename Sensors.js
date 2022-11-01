class SoundSensor {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fill();
        ctx.closePath();
    }
};

export default SoundSensor;