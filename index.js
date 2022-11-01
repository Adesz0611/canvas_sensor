import Player from "./Player.js";
import Game from "./Game.js";

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


let player = new Player(10, 10, 50, 50, 4);

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    player.update();
    player.draw(ctx);


    requestAnimationFrame(draw);
}

draw();