const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const controllers = require('../controllers/publisherControllers')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)
router.post("/createPublisher", controllers.createPublisher)
router.post("/createBook", bookController.createBook)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// router.get("/getAuthorsData", authorController.getAuthorsData)

router.put("/updateBooks", bookController.updateBooks)

router.put("/updatePrice", bookController.updatePrice)

// router.get("/getBooksData", bookController.getBooksData)


module.exports = router;