import Player from "./Player.js";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let keys = [];
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const Key = {
    Left: 65,
    Right: 68,
    Up: 87,
    Down: 83,
};


function keyDownHandler(e) {
    keys[e.keyCode] = true;

    if(keys[Key.Left]) {
        player.vx = -player.speed;
    }

    if(keys[Key.Right]) {
        player.vx = player.speed;
    }

    if(keys[Key.Up]) {
        player.vy = -player.speed;
    }

    if(keys[Key.Down]) {
        player.vy = player.speed;
    }
}

function keyUpHandler(e) {
    keys[e.keyCode] = false;

    if(e.keyCode == Key.Left || e.keyCode == Key.Right) { player.vx = 0; }
    if(e.keyCode == Key.Up || e.keyCode == Key.Down) { player.vy = 0; }
    /*
    switch(e.keyCode) {
        case Key.Left:
        case Key.Right:
            player.vx = 0;
        case Key.Up:
        case Key.Down:
            player.vy = 0;
        default:
            break;
    }
    */
}



let player = new Player(10, 10, 50, 50, 2);

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    player.update();
    player.draw(ctx);


    
    requestAnimationFrame(draw);
    //player.x++;
}

draw();
//setInterval(draw, 16);


