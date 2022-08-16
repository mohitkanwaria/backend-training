const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({ //data creation before rules
    bookName: {
        type: String,
        required: true,
        // unique:true,
    },
    authorName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    category: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    year: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
    tags : ["String"],
    date : {
        type : Date,
        default : Date.now
    },
    isPublished : Boolean,
    Prices : {
        indianPrices : String,
        europePrince : String
    },
    sales : { type : Number , default : 10},

}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //books in database
//Book = name of the collection of the database.



// String, Number
// Boolean, Object/json, array

//validators:
//required : true
//unique
//default

//String
//Number
//Date
//Boolean
//Arrays
//Object
//ObjectId
//Buffer - not cover

//No SQL vs SQL:-
