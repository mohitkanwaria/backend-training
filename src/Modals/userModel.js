const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  //schema = a plan,a model
    firstname: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age: Number,
    isIndian: Boolean,
    parentsInfo: {
        motherName: String,
        fatherName: String,
        siblingName: String,
    },
    cars: [String]
}, { timestamps: true });
//createdAt :
//updatedAt :


module.exports = mongoose.model('User', userSchema)//users in database
//user = name of the collection of the database.



//String,Number
//Boolean,Object/Json,array