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

        //délkeleti szoba
        new Wall(495, 413, 3, 120),
        new Wall(495, 410, 245, 3),

        //délnyugati szoba
        new Wall(430, 413, 3, 120),
        new Wall(13, 410, 420, 3),

        //wc
        new Wall(495, 295, 3, 50),
        new Wall(495, 292, 245, 3),

        // gyerekszoba1
        new Wall(430, 160, 3, 250),
        new Wall(10, 160, 65, 3),
        new Wall(140, 160, 70, 3),

        // gyerekszoba2
        new Wall(210, 160, 3, 250),
        new Wall(213, 160, 70, 3),
        new Wall(348, 160, 82, 3),

        new Wall(430, 13, 3, 17),
        new Wall(10, 92, 420, 3),

        new Wall(495, 13, 3, 214),
    ],
};

export default Game;