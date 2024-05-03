const Game = require('../model/game.model');

class SiteController {
    home = (req, res) => {
        Game.get_all((data) => {
            res.send({ result: data });
        });
        // res.render('home');
    };
    search = (req, res) => {
        res.render('search');
    };
}
module.exports = new SiteController();
