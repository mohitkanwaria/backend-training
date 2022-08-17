const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')

/////////////////////////////////////////////////////////////////////////////////////////////////////
//1st
const createBook = async (req, res) => {
    let data = req.body
    let bookData = await bookModel.create(data)
    res.send(bookData)
}

const creatAuthor = async (req, res) => {
    let data = req.body
    let authorData = await authorModel.create(data)
    res.send(authorData)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//2nd
const byAuthorId = async (req, res) => {
    let data = await authorModel.find({ author_name: "Chetan Bhagat" })
    let book = await bookModel.find({ author_id: { $eq: data[0].author_id } })
    res.send({ data })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3rd
// const towStates=async (req, res)=>{
//     let book=await bookModel.find({name : "Two states"})   
//     let author=await authorModel.find({author_id :{$eq : data[0].author_id }})
//     res.send({book})
// }

module.exports.createBook = createBook
module.exports.creatAuthor = creatAuthor
module.exports.byAuthorId = byAuthorId
// module.exports.
