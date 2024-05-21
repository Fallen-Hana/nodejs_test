const express = require('express');
const router = express.Router();
const categoryController = require('../app/controller/category.controller');

router.get('/', categoryController.show);

module.exports = router;