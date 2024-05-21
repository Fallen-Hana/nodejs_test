const Game = require('../model/game.model');
const generateSlug = require('./datacontrol');

class GamesController {
    show = (req, res) => {
        Game.get_one(req.params.slug, (result) => {
            res.status(200).render('detail/show', { result: result });
            // res.send(result)
        });
    };

    create = (req, res) => {
        res.render('detail/create');
    };

    store = (req, res) => {
        const formData = req.body;
        const dataName = formData.name;
        formData.slug = generateSlug(dataName);
        Game.insert(formData, (result) => {
            if (result) {
                res.redirect('/me/stored/gamelist');
            } else {
                res.status(500).json({ message: 'Error adding game' });
            }
        });
    };

    edit = (req, res) => {
        Game.get_one(req.params.id, (result) => {
            res.status(200).render('detail/edit', { result: result });
        });
    };

    update = (req, res) => {
        const formData = req.body;
        const dataId = req.params.id;
        Game.update(dataId , formData, (result) => {
            if (result) {
                res.redirect('/me/stored/gamelist');
            } else {
                res.status(500).json({ message: 'Error updating game' });
            }
        });
    };

    delete = (req, res) => {
        const dataId = req.params.id;
        Game.softDelete(dataId, (result)=>{
            if(result){
                res.redirect('back');
            }else{
                res.status(500).json({ message: 'Error' });
            }
        });
    };
    forceDelete = (req, res) => {
        const dataId = req.params.id;
        Game.delete(dataId, (result)=>{
            if(result){
                res.redirect('back');
            }else{
                res.status(500).json({ message: 'Error' });
            }
        });
    };
    restore = (req, res) => {
        const dataId = req.params.id;
        Game.restore(dataId, (result)=>{
            if(result){
                res.redirect('back');
            }else{
                res.status(500).json({ message: 'Error' });
            }
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
