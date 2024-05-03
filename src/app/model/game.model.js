const db = require('../config/db/db');
const Game = (games) => {
    this.id = games.id;
    this.name = games.name;
    this.DOB = games.DOB;
};
Game.get_all = (result) => {
    db.query('SELECT * FROM student', (err, student) => {
        if (err) {
            result(null);
        } else {
            result(student);
        }
    });
};
module.exports = Game;
// Game.get_all = (result) => {
//     let data = [
//         {"id":1,"name":"Titanfall 2"},
//         {"id":2,"name":"Ghostrunner"},
//         {"id":3,"name":"Granblue Fantasy Relink"},
//         {"id":4,"name":"Marvel Spider-Man Remastered"},
//         {"id":5,"name":"Atomic Heart"},
//     ]
//     result(data);
// }
// Game.getByID = (id) => {
//     let data = {"id":id,"name":"Atomic Heart"}
//     return data;
// }
// Game.create = (data, result) => {
//     result(data);
// }
// module.exports = Game;
