const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( { //data creation beforre rulles
    bookName : {
        type:String,
        required:true,
        unique:true,
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
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //users



// String, Number
// Boolean, Object/json, array