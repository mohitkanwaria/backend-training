const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData/:id", UserController.getUsersData)
//1
router.post("/createBook", BookController.createBook  )
//2
router.get("/booksData", BookController.booksData)
//3
router.post("/getBooksInYear", BookController.getBooksInYear)
//4
router.post("/getparticularBOoks", BookController.getparticularBOoks)
//5
router.get("/getXINRBooks", BookController.getXINRBooks)
//6
router.get("/getRandomBooks", BookController.getRandomBooks)
//////////////////////////////////////////////////////////////////////////////////////
//class:- 

// router.get("/getBooksData(end point)", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //Moment JS
// const moment = require ('moment');
// router.post("/dateManipulations",function(req,res){
//     const today =moment();
//     console.log(today.format('YYYY-MM-DD'));

//     let validOrNot
//     res.send({msg : "all good"})
// })

module.exports = router;