import Wall from "./Wall.js";

let Game = {
    keys: [],
    Key: {
        Left: 65,
        Right: 68,
        Up: 87,
        Down: 83,
    },
    canvas: document.getElementById("myCanvas"),
    walls: [
        new Wall(50, 100, 100, 3),
        //new Wall(200, 500, 3, 130),
    ],
};

export default Game;