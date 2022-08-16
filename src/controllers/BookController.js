const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)   //data = entry ,create = it will create a entry inside my data base with following (data).
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
 //in this hey usermodel  go into the data base and find all the entries inside that user collection in the data base.
    // let allBooks = await BookModel.find() //.count() //COUNT

    // let allBooks= await BookModel.find({$or : [{ authorName : "SK" }, {isPublished :true },{year : 1990} ]} )  //.select({authorName :1,bookName : 1,_id : 0 })  //SELECT KEYS THAT WE WANT

     //  let allBooks= await BookModel.find().sort({ sales :-1 })//SORT

    // let page = req.query.body;
    // let allBooks= await BookModel.find().skip(3 * (page -1)).limit(3)

    // let allBooks = await BookModel.find().sort({sales:1}).skip(3 * (page-1)).limit(3).select({authorName :1,bookName : 1,_id : 0})

    // let allBooks = await BookModel.find({sales: {$eq : 50 }})
    // let allBooks = await BookModel.find({sales: {$ne : 50 }})
    // let allBooks = await BookModel.find({sales: {$gt : 50 }})
    // let allBooks = await BookModel.find({sales: {$lt : 50 }})
    // let allBooks = await BookModel.find({sales: {$lte : 50 }})
    // let allBooks = await BookModel.find({sales: {$gte : 50 }})
    // let allBooks = await BookModel.find({$or : [{sales : { $eq : 10 }}, { sals : {$eq :17}},{sales : {$eq :82}}]}).count()
    //sales : { $in : [10,17, 82]}

    // let allBooks =await BookModel.find({ sales : {$in : [17,82,137]}}).select({ sales : 1, _id :0})

    // let allBooks =await BookModel.find({ sales : {$gt : 20, $lt : 100}})  //sales is between 20 and 100... sales > 20 AND sales < 100

    // let allBooks =await BookModel.findById("")

  // let allBooks =await BookModel.findOne({sales : 10})
    
  // let allBooks =await BookModel.find({sales : 10})


  //update | findById 
//   let allBooks =await BookModel.update({sales : {$gt :10} }, //condition 
//   {$set :{isPublished :true}} //the change that you want to make
//   )


  //Regex
//   let allBooks = await BookModel.find ({bookname : /^Int/ })
// let allBooks = await BookModel.find ({bookname : /^Int/i })//make case insensitive
// let allBooks = await BookModel.find ({bookname : /5$/ })
// let allBooks = await BookModel.find ({bookname : /.programming/i })


let a = 2 +4
a = a + 10
console.log(a)
let allBooks =await BookModel.find()  ///normally this is an asynchronous call...but await makes it synchronous

//WHEN AWAIT IS USED :- database + axios
//AWAIT can not  be used inside forEach , MAP and many of the array functions..BE CAREFUL
console.log(allBooks)
let b =14
b = b+10
console.log(b)


    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData