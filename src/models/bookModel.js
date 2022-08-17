const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    authorName: String,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    //sales : { type :Number, default : 10},
    //"best book on earth " ["Nodejs in detail","mongodb in detail","frontend in detail"]
    // {
    //     "ch1" : "awesome intro to js",
    //     "ch2" : " intro to nodejs",
    //     "ch3" : "intro to db"
    // }
    //summary :mongoose.Schema.Types.mixed
    year: {
        type: Number,
        default: "2021"
    },
    "totalpages": Number,
    "stockavailable": Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
