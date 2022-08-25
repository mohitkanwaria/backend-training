const mongoose = require('mongoose');


//book schema (1A):-
const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        required: true
    },
    price: Number,
    ratings: Number,


}, { timestamps: true })

module.exports = mongoose.model('onlyBook', bookSchema) 