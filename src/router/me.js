const express = require('express');
const router = express.Router();
const meController = require('../app/controller/me.controller');

router.use('/stored/gamelist', meController.storedList);
router.use('/trash/gamelist', meController.deletedList);

module.exports = router;

// module.exports = (router)=> {
//     const gameController = require('../controller/games.controller');

//     router.get('/games/list', gameController.get_list);
//     router.get('/games/detail/:id', gameController.detail);
//     router.get('/games/add', gameController.add_game);
// };
