const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers')

router.post('/createBook', controller.createBook)

router.post('/createAuthor', controller.creatAuthor)

router.get('/byAuthorId', controller.byAuthorId)

module.exports = router;