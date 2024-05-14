const Game = require('../model/game.model');

class MeController {
    storedList = (req, res) => {
        Game.get_all((data) => {
            res.render('me/stored-list', { data: data });
            // res.send({data: data})
        });
    };
}
module.exports = new MeController();
