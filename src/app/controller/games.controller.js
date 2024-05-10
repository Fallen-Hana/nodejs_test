const Game = require('../model/game.model');
class GamesController {
    show = (req, res) => {
        Game.get_one(req.params.slug, (result) => {
            res.render('detail/show', { result: result });
            // res.send(result)
        });
    };
}
module.exports = new GamesController();
// const Game = require('../model/game.model')
// exports.get_list = (req, res) => {
//     Game.get_all((data)=>{
//         res.send({result: data});
//     });
// };

// exports.detail = (req, res) => {
//     let data = Game.getByID(req.params.id)
//     res.send({result: data});
// };
// exports.add_game = (req, res)=> {
//     Game.create(data, (respnse)=>{
//         res.send({result: respnse})
//     });
// }
