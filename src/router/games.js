const express = require('express');
const router = express.Router();

const gameController = require('../app/controller/games.controller');

router.use('/create', gameController.create);
router.use('/store', gameController.store);
router.use('/:slug', gameController.show);

module.exports = router;

// module.exports = (router)=> {
//     const gameController = require('../controller/games.controller');

//     router.get('/games/list', gameController.get_list);
//     router.get('/games/detail/:id', gameController.detail);
//     router.get('/games/add', gameController.add_game);
// };
