const gamesRouter = require('./games');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    app.use('/games', gamesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}
module.exports = route;
// module.exports = (router) =>{
// const homeController = require('../controller/home.controller');

// router.get('/', homeController.home);
// router.get('/games', homeController.games);
// };
