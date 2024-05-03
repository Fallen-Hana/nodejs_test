const gamesRouter = require('./games');
const siteRouter = require('./site');

function route(app) {
    app.use('/games', gamesRouter);

    app.use('/', siteRouter);
}
module.exports = route;
// module.exports = (router) =>{
// const homeController = require('../controller/home.controller');

// router.get('/', homeController.home);
// router.get('/games', homeController.games);
// };