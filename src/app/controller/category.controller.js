const Category = require('../model/category.model');

class GamesCategory {
    show = (req, res) => {
        Category.get_all((data) => {
            res.send(data)
        });
    };
}
module.exports = new GamesCategory();