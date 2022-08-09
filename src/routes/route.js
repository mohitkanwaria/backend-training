const express = require('express');
const underScore = require('underscore')
const abc = require('../introduction/intro')
const router = express.Router();
const welcome = require('../logger/logger')
const dateMonthInfo = require('../util/helper')
const formatter=require('../validator/formatter')
const lodash = require('lodash')



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    welcome.welcome()
    console.log("")
    dateMonthInfo.printDate()
    dateMonthInfo.printMonth()
    dateMonthInfo.getBachInfo()
    formatter.problem()
    let weekend =['Saturday','Sunday','Monday']
    let result = underScore.first(weekend,2)
    console.log('Underscore example result is', result)
    let month = ['Jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    let lodash1= lodash.chunk(month,2)
    console.log('Month example result is',lodash1)
    
});

router.get('/students',function(req,res){
    let students = ['Mohit' , 'jatin', 'priyanka']
    res.send(students)
})
 
router.get('/students-details/:name', function(req,res){
    console.log("This is the request " + JSON.stringify(req.params))
    let reqParams = req.params
    let studentName = reqParams.name
    comsole.log('Name of the student is', studentName)
    let studentsDetails = studentsName +" " + studentName
     // console.log(name)
    // let details ="Mohit"
    res.send(studentsDetails)
})

router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})



router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason




////////////////////////////////////////////////////////////1/////////////////////////////////////////////////////////////////

router.get('/get-movies',function(req, res){ //student detail api he 
    let movies1= ["Naruto ","Dragon ball-z","Death note","One piece"]//api is implementation is used to send response for request
    res.send(movies1)
})


///////////////////////////////////////////////////////////2//////////////////////////////////////////////////////////////////

router.get('/get-movie/:indexNumber',function(req, res){ //student detail api he 
    
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    let index = req.params.indexNumber;
    console.log(movies[index])
     res.send(movies[index])
})


////////////////////////////////////////////////////3/////////////////////////////////////////////////////////////////////////

 
router.get('/get-moviess/:indexNumber',function(req, res){ //student detail api
    
    let moviesName=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;

     if(index > moviesName.length){
        return res.send("use a valid index  ")
     }else{
    
     res.send(moviesName[index])
     }
})


/////////////////////////////////////////////////////////4////////////////////////////////////////////////////////////////////

router.get('/get-/films',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    res.send(moviesName)
})


//////////////////////////////////////////////////////5///////////////////////////////////////////////////////////////////////



router.get('/get-/films/:indexNumber',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    let index = req.params.indexNumber;
     if(index > moviesName.length){
        return res.send("no movie exist with this id ")
     }else{
     res.send(moviesName[index])
     }
})

