const Game = require('../model/game.model');

class SiteController {
    home = (req, res) => {
        Game.get_all((data) => {
            res.render('home', { data: data });
            // res.send({data: data})
        });
    };
    search = (req, res) => {
        res.render('search');
    };
}
module.exports = new SiteController();
