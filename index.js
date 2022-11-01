import Player from "./Player.js";
import Game from "./Game.js";

let player = new Player(25, 750, 35, 35, 4);

document.getElementById("speed").oninput = function () {
    const speed = Number(document.getElementById("speed").value);
    player.speed = speed * 2;
    document.getElementById("speedSpan").innerHTML = ["Lassú", "Közepes", "Gyors"][speed - 1];
};

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    Game.keys[e.keyCode] = true;
}

function keyUpHandler(e) {
    Game.keys[e.keyCode] = false;
}

function getXDirection() {
    if(Game.keys[Game.Key.Right]) {
        return 1;
    }
    if(Game.keys[Game.Key.Left]) {
        return -1;
    }
    
    return 0;
}

function getYDirection() {
    if(Game.keys[Game.Key.Up]) {
        return -1;
    }
    if(Game.keys[Game.Key.Down]) {
        return 1;
    }
    
    return 0;
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    player.update();

    Game.walls.forEach(wall => {
        wall.draw(ctx);
        while(player.checkWallCollision(wall)) {
            player.x -= getXDirection();
            player.y -= getYDirection();
        }
    });
    player.draw(ctx);
    
    


    requestAnimationFrame(draw);
}

draw();

