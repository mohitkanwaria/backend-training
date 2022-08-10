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
    res.send('My second ever api !')
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

router.get('/test-api-1',function(req,res){
res.send("mohit")
});

router.get('/test-api-2',function(req,res){
    res.send("mohit is best")
    });


router.post('/test-post-3',function(req,res){
    // let id = req.body.user 
    // let pwd = req.body.password
    
    // console.log(id,pwd)


    console.log(req.body)
    res.send({ msg :"hi",status: true})
        });
          
//question :- take input in a post request and add it to an array and return the new array
router.post('/test-post-4',function(req,res){
    let arr = [12,"functionup"]
    let ele = req.body.element
    arr.push(ele)

    res.send( {msg:arr, status :true} )
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





////////////////////////////////////////////////////////////1/////////////////////////////////////////////////////////////////

// router.get('/get-movies',function(req, res){ //student detail api he 
//     let movies1= ["Naruto ","Dragon ball-z","Death note","One piece"]//api is implementation is used to send response for request
//     res.send(movies1)
// })


///////////////////////////////////////////////////////////2//////////////////////////////////////////////////////////////////

// router.get('/get-movies/:indexNumber',function(req, res){ //student detail api he (indexnumber = path parameter)
    
//     let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

//     let index = req.params.indexNumber;
//     console.log(movies[index])
//      res.send(movies[index])
// })


////////////////////////////////////////////////////3/////////////////////////////////////////////////////////////////////////

 
// router.get('/get-moviess/:indexNumber',function(req, res){ //student detail api
    
//     let moviesName=['rang de basanti','The shining','Lord of the rings','batman begins']
//     let index = req.params.indexNumber;

//      if(index > moviesName.length){
//         return res.send("use a valid index  ")
//      }else{
    
//      res.send(moviesName[index])
//      }
// })


/////////////////////////////////////////////////////////4////////////////////////////////////////////////////////////////////

// router.get('/get-/films',function(req, res){ //student detail api he    

//     let moviesName=[ {"id": 1,"name": "The Shining"}, 
//  {"id": 2,"name": "Incendies"}, 
//  {"id": 3,"name": "Rang de Basanti"},
//   {"id": 4,"name": "Finding Nemo"}]
//     res.send(moviesName)
// })


//////////////////////////////////////////////////////5///////////////////////////////////////////////////////////////////////



// router.get('/get-/films/:indexNumber',function(req, res){ //student detail api he    

//     let moviesName=[ {"id": 1,"name": "The Shining"}, 
//  {"id": 2,"name": "Incendies"}, 
//  {"id": 3,"name": "Rang de Basanti"},
//   {"id": 4,"name": "Finding Nemo"}]
//     let index = req.params.indexNumber;
//      if(index > moviesName.length){
//         return res.send("no movie exist with this id ")
//      }else{
//      res.send(moviesName[index])
//      }
// })

// router.get("/shoes",function(req,res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     res.send("dummy response")
// })

// router.get("/candidates",function(req,res){
//     console.log('Query')
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array

    router.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
 
    let total = 0;
    for (let i=0;i < arr.length;i++) 
    // console.log(i)
  {
        total += arr[i];  //total = total +arr[i]
//(1,3,6,11,17,24)
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing:-
    router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length  //5
    // console.log(arr)
  
    let total = 0;
    for (let i=0;i<arr.length;i++) {
        total += arr[i];   //total = total + arr[i]
        //33,67,102,139,177
    }
  
    let firstDigit= arr[0]  //33
    let lastDigit= arr.pop()  //38
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
                        //(6*71)/2=213
    let missingNumber= consecutiveSum - total
                    // 213 - 177 =36
    res.send(  { data: missingNumber  }  );
  });

module.exports = router;
// adding this comment for no reason