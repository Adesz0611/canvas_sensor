import Player from "./Player.js";
import Game from "./Game.js";

let player = new Player(10, 10, 50, 50, 4);

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



function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    player.update();
    player.draw(ctx);


    requestAnimationFrame(draw);
}

draw();

