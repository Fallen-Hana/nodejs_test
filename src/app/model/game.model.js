const db = require('../config/db/db');

class Game {
    constructor() {}

    // get_one(value, result) {
    //     const column = isNaN(value) ? "slug" : "id";
    //     const query = `SELECT * FROM game_list WHERE ${column} = ?`;
    //     db.query(query, value, (err, detail) => {
    //             if (err || detail.length === 0) {
    //                 result(null);
    //             } else {
    //                 result(detail[0]);
    //             }
    //         }
    //     );
    // };

    get_one(value, result) {
        const query = "SELECT * FROM game_list WHERE id = ? OR slug = ?";
        db.query(query, [value, value], (err, detail) => {
                if (err || detail.length === 0) {
                    result(null);
                } else {
                    result(detail[0]);
                }
            }
        );
    };

    get_all = (result) => {
        db.query('SELECT * FROM game_list', (err, gameList) => {
            if (err) {
                result(null);
            } else {
                result(gameList);
            }
        });
    };

    insert = (formData, result) => {
        const checkQuery = 'SELECT * FROM game_list WHERE slug = ?';
        db.query(checkQuery, formData.slug, (rows)=>{
            if (rows.length === 0){
                const insertQuery = 'INSERT INTO game_list SET ?';
                db.query(insertQuery, formData, (err, add)=>{
                    if(err){
                        result(null);
                    }else{
                        console.log('Dữ liệu đã được thêm vào cơ sở dữ liệu.');
                        result(add);
                    }
                });
            }else{
                console.log('Dữ liệu đã tồn tại trong cơ sở dữ liệu.');
                result(null);
            }
        });
    };

    // update = (id, formData, result) =>{
    //     const query = 'UPDATE game_list SET ? WHERE id = ?';
    //     db.query = (query, [formData, id], (err, updateResult) => {
    //         if (err) {
    //             result(null);
    //         } else {
    //             console.log('Dữ liệu đã được cập nhật.');
    //             result(updateResult);
    //         }
    //     });
    // };
    update = (id, formData, result) =>{
        const setQueryString = Object.keys(formData).map(key => { return `${key} = ?`});
        const setQueryParams = Object.values(formData);
        const query = `UPDATE game_list 
        SET ${setQueryString}
        WHERE id = ?`;
        db.query (query, [setQueryParams, id].flat(), (err, updateResult) => {
            if (err) {
                result(null);
            } else {
                console.log('Dữ liệu đã được cập nhật.');
                result(updateResult);
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
