const express = require('express');

const router = express.Router();

const BookModel = require("../models/BookModel.js")

const BookController = require("../controllers/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook)  // BookController.createBook = handler

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;



//npx nodemon src/index.js
//rm .git/index.lock
//sudo kill `sudo lsof -t -i:3000`