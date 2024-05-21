const express = require('express');
const router = express.Router();

const gameController = require('../app/controller/games.controller');

router.get('/create', gameController.create);
router.post('/store', gameController.store);
router.get('/:id/edit', gameController.edit);
router.patch('/:id/restore', gameController.restore);
router.put('/:id', gameController.update);
router.delete('/:id/force', gameController.forceDelete);
router.delete('/:id', gameController.delete);
router.get('/:slug', gameController.show);

module.exports = router;

// module.exports = (router)=> {
//     const gameController = require('../controller/games.controller');

//     router.get('/games/list', gameController.get_list);
//     router.get('/games/detail/:id', gameController.detail);
//     router.get('/games/add', gameController.add_game);
// };
