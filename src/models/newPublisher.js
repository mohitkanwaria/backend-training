const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema( {
   
    name: String,
    headquarters : String

}, { timestamps: true });


module.exports = mongoose.model('Publisher', publisherSchema)