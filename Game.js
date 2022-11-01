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
        // Északi fal
        new Wall(10, 10, 730, 3),

        // Déli falak
        new Wall(10, 715, 420, 3),
        new Wall(495, 715, 245, 3),

        //Nyugati fal
        new Wall(10, 13, 3, 702),

        // Keleti fal
        new Wall(737, 13, 3, 702),
        

        new Wall(430, 598, 3, 120),
        new Wall(495, 598, 3, 120),
    ],
};

export default Game;