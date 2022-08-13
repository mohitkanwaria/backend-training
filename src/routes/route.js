const express = require('express');
const router = express.Router();
const UserModel = require("../Modals/userModel")
const userController = require("../controllers/user controller")

router.get('/students/:name', function (req, res) {
  let studentName = req.params.name
  console.log(studentName)
  res.send(studentName)
});

router.get('/test-me', function (req, res) {
  res.send("My first ever api")
});


router.get("/test-api-6", function (req, res) {
  res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
  res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
  res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
  // let id = req.body.user
  // let pwd= req.body.password

  // console.log( id , pwd)

  console.log(req.body)

  res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
  let arr = [12, "functionup"]
  let ele = req.body.element
  arr.push(ele)
  res.send({ msg: arr, status: true })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let players =
  [
    {
      "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": [
        "swimming"
      ]
    },
    {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
        "soccer"
      ],
    },
    {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
        "soccer"
      ],
    },
  ]

router.post('/players', function (req, res) {

  //LOGIC WILL COME HERE
  let newplayer = req.body.player
  let n = newplayer.name

  for (i = 0; i < players.length; i++) {
    if (players[i].name == n) {
      return res.send("Sorry, This name is already exist!")
    }
  }
  players.push(newplayer)
  res.send({ players })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let persons = [
  {
    name: "PK",
    age: 10,
    votingStatus: false
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false
  }
]

router.post('/voting', function (req, res) {
  let age = req.query.age

  let elegiblePerson = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= age) {
      persons[i].votingStatus = true
      elegiblePerson.push(persons[i])
    }
  } if (elegiblePerson.length == 0) {
    return res.send('No data to show.')
  } else {
    return res.send({elegiblePerson})
  }

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//query -params:-
// //to make filters  /searches
// router.get("/get-query-1", function(req,res){
// let data = req.query
// console.log( data )
// res.send({data : data,status : true})
// })



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//filter out all the number that are greater than input (input is received from query params)

// let myArr = [23,45,67,4,253,6373,63,57,37,353,3,67]
// router.post("/post-quer-2",function(req,res){
//     let input = req.query.input
//     // let finalArr =myArr.filter(ele => ele >input)
//     let finalArr =[]
//     for (let i=0;i<myArr.length;i++){
//         if(myArr[i]>input) finalArr.push( myArr[i])
//     }

//     res.send( { data:finalArr, status : true})
// })

////////////////////////////////
router.post("/createUser", async function (req, res) {
  let data = req.body
  // console.log(data);
  let savedData = await UserModel.create(data)
  res.send({ msg: savedData })
});

// router.post("/createUser",UserController.createUser)

router.get("/getUsersdata", userController.getUsersData)

// router.get("/getUsersData",async function (req, res) {
//   let allUsers = Usemodel.find()
//   // let data = req.body
//   // console.log(data); 
//   res.send({ msg: allUsers })
// });

// {
//   "name" : "mohit",
//   "last name" : "kanwaria ",
//   "age" : 23,
//   "mobile" : "1234555789",
//   "isIndian" : true,
//   "parentsInfo" : {
//       "motherName" : "FunctionUp",
//       "siblingName" : "PK"
//   },
//   "cars" : [ ]
// }




module.exports = router;


//npx nodemon src/index.js
//rm .git/index.lock
//sudo kill `sudo lsof -t -i:3000`