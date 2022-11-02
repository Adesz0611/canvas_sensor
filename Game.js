import Wall from "./Wall.js";
import SoundSensor from "./Sensors.js";

let Game = {
    keys: [],
    Key: {
        Left: 65,
        Right: 68,
        Up: 87,
        Down: 83,
    },
    canvas: document.getElementById("myCanvas"),
    sound_sensors: [
        new SoundSensor(620, 550, 200),
        new SoundSensor(320, 300, 100),
    ],
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


        new Wall(530, 715, 65, 3, "lightblue"),
        new Wall(645, 715, 65, 3, "lightblue"),

        new Wall(737, 50, 3, 65, "lightblue"),
        new Wall(737, 200, 3, 65, "lightblue"),

        new Wall(25, 10, 65, 3, "lightblue"),
        new Wall(170, 10, 65, 3, "lightblue"),
        new Wall(300, 10, 65, 3, "lightblue"),
        new Wall(520, 10, 65, 3, "lightblue"),
        new Wall(630, 10, 65, 3, "lightblue"),

        new Wall(40, 715, 65, 3, "lightblue"),
        new Wall(170, 715, 65, 3, "lightblue"),
        new Wall(300, 715, 65, 3, "lightblue"),

        new Wall(10, 20, 3, 65, "lightblue"),
        new Wall(10, 95, 3, 65, "lightblue"),
        new Wall(10, 190, 3, 65, "lightblue"),
        new Wall(10, 300, 3, 65, "lightblue"),
        new Wall(10, 430, 3, 65, "lightblue"),
        new Wall(10, 530, 3, 65, "lightblue"),
        new Wall(10, 620, 3, 65, "lightblue"),

        //Iroasztal + szek
        new Wall(100, 520, 65, 100, "#965908"),
        new Wall(60, 550, 30, 30, "#965908"),

        //Fotel
        new Wall(250, 430, 100, 65, "#089675"),
        new Wall(240, 430, 10, 65, "#09b88f"),
        new Wall(340, 430, 10, 65, "#09b88f"),
        new Wall(240, 430, 100, 10, "#09b88f"),


        //Iroasztal + szek
        new Wall(570, 580, 100, 65, "#965908"),
        new Wall(600, 650, 30, 30, "#965908"),

        //Fotel
        new Wall(560, 430, 100, 65, "#089675"),
        new Wall(550, 430, 10, 65, "#09b88f"),
        new Wall(650, 430, 10, 65, "#09b88f"),
        new Wall(550, 430, 100, 10, "#09b88f"),

        //ágy
        new Wall(270, 260, 100, 150, "#09b88f"),
        new Wall(270, 380, 100, 30, "white"),

        //ágy
        new Wall(70, 260, 100, 150, "#09b88f"),
        new Wall(70, 380, 100, 30, "white"),

        //wc
        new Wall(680, 300, 50, 70, "white"),

        new Wall(570, 300, 30, 30, "white"),
    ],
};

export default Game;