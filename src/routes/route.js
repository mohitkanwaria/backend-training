const express = require('express');
const router = express.Router();
const userController= require("../controllers/newuserController")
const mid1 =require('../Middleware/middleware')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser )

router.post("/login", userController.loginUser)

// //The userId is sent by front end
router.get("/users/:userId",mid1.mid , userController.checkToken)  //path param = after next colon come is path param.

router.put("/updatedUser/:userId",mid1.mid , userController.updatedUser)

router.delete("/deleteUser/:userId",mid1.mid , userController.deleteUser)


//globall middleware

// router.get("/users/:userId", userController.checkToken)  //path param = after next colon come is path param.

// router.put("/updatedUser/:userId", userController.updatedUser)

// router.delete("/deleteUser/:userId", userController.deleteUser)
// router.post("/login", userController.loginUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;