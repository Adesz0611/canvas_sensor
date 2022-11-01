class Wall {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
    

        ctx.closePath();

/*
        ctx.beginPath();

        ctx.fillStyle = "black";
        ctx.rect();
        
        ctx.lineWidth = this.thickness;
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.closePath();
*/
    }
};

export default Wall;