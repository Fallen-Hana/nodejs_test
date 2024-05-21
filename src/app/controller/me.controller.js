const Game = require('../model/game.model');

class MeController {
    storedList = (req, res) => {
        Game.get_all((data) => {
            res.render('me/stored-list', { data: data });
            // res.send({data: data})
        });
    };
    deletedList = (req, res) => {
        Game.deleted((data) => {
            res.render('me/deleted-list', { data: data });
        });
    };
};
module.exports = new MeController();
