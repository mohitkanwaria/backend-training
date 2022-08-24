const express = require('express');
const router = express.Router();

// //controller:-we importing the controllers.
// const authorController = require("../controllers/authorController")
// const bookController = require("../controllers/bookController")
// const publishercontrollers = require('../controllers/publisherControllers')

// // router.get("/test-me", function (req, res) {
// //     res.send("My first ever api!")
// // })

// //
// router.post("/createAuthor", authorController.createAuthor)
// router.post("/createPublisher", publishercontrollers.createPublisher)
// router.post("/createBook", bookController.createBook)
// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// router.put("/updateBooks", bookController.updateBooks)
// router.put("/updatePrice", bookController.updatePrice)



// router.get("/getAuthorsData", authorController.getAuthorsData)
// router.get("/getBooksData", bookController.getBooksData)

const  mid1 =function(req,res,next) {
    console.log("Hi Ia ma a middleware named Midi")
    //logic
    let loggedIn = false
    if (loggedIn == true){
        next()
    }
    else{
        res.send ("Please login or register")
    }
}
router.get("/basicRoute" ,mid1,UserController.basicCode)

module.exports = router;