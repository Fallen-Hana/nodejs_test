const gamesRouter = require('./games');
const meRouter = require('./me');
const siteRouter = require('./site');
// const categoryController = require('../app/controller/category.controller');
const gamesCategory = require('./category')

function route(app) {
    app.use('/games', gamesRouter);
    app.use('/category', gamesCategory);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}
module.exports = route;
// module.exports = (router) =>{
// const homeController = require('../controller/home.controller');

// router.get('/', homeController.home);
// router.get('/games', homeController.games);
// };
