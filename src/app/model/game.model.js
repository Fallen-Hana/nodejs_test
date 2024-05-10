const db = require('../config/db/db');

class Game {
    constructor() {}

    get_one(slug, result) {
        db.query(
            'SELECT * FROM game_list WHERE slug = "' + slug + '"',
            (err, detail) => {
                if (err || detail.length === 0) {
                    result(null);
                } else {
                    result(detail[0]);
                }
            }
        );
    }

    get_all = (result) => {
        db.query('SELECT * FROM game_list', (err, gameList) => {
            if (err) {
                result(null);
            } else {
                result(gameList);
            }
        });
    };
}
module.exports = new Game();

// }
// Game.getByID = (id) => {
//     let data = {"id":id,"name":"Atomic Heart"}
//     return data;
// }
// Game.create = (data, result) => {
//     result(data);
// }
// module.exports = Game;
