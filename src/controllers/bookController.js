const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/newPublisher")
const mongoose = require("mongoose")

//==================3===============================
const createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher

    //author Validation
    //3(a)
    if (!authorId) return res.send({ msg: "authorId must be present" })
    //3(b)
    if (!mongoose.isValidObjectId(authorId)) return res.send({ msg: "authorId is Invalid" })

    let author = await authorModel.findById(book.author_id)

    if (!author) return res.send({ msg: "author not found" })
    //publisher validation
    //3(c)
    if (!publisherId) return res.send({ msg: "publisherId must be present" })
    //3(d)
    if (!mongoose.isValidObjectId(publisherId)) return res.send({ msg: "publisherId is Invalid" })
    let publisher = await publisherModel.findById(book.publisher)
    if (!publisher) return res.send({ msg: "publisher not found" })

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

//========================4=========================================================================
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', "publisher"])
    res.send({ data: specificBook })

}

//=====================5a============================================================================
const updateBooks = async function (req, res) {
    const booksData= await bookModel.updateMany({$set : {isHardCover : 0}},{new:true})
    let data = await bookModel.updateMany(  { "publisher_id" : "6300bffcc078f81b860c8d3d" } , { $set: { isHardCover: true } }, { new: true })
    res.send({ msg: data })
}
//=======================Q=5b============================================================================
const updatePrice = async function (req, res) {
    let price = await bookModel.updateMany({ "ratings": { $gt: 3.5 } }, { $inc: { "price": +10 } }, { new: true })
    res.send(price)
}


module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBooks = updateBooks
module.exports.updatePrice = updatePrice