const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

module.exports = mongoose.model('Book', bookSchema)