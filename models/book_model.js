const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    id: { type: String},
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

module.exports = mongoose.model('Book', bookSchema)