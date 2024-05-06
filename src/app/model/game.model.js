const db = require('../config/db/db');
const Game = (games) => {
    this.id = games.id;
    this.name = games.name;
    this.des = games.des;
    this.image = games.image;
};
Game.get_all = (result) => {
    db.query('SELECT * FROM game_list', (err, gameList) => {
        if (err) {
            result(null);
        } else {
            result(gameList);
        }
    });
};
module.exports = Game;

// }
// Game.getByID = (id) => {
//     let data = {"id":id,"name":"Atomic Heart"}
//     return data;
// }
// Game.create = (data, result) => {
//     result(data);
// }
// module.exports = Game;
