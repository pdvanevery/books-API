//Modules and Globals
const express = require('express')
const mongoose = require('mongoose')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
// //Express
app.use(express.json())

//Middleware
app.use(express.urlencoded({ extended: true}))

//Routes
app.get('/',  (req, res) => {
    res.send('Hello World')
})

//Endpoint
const bookController = require('./controllers/books.js')
app.use('/books', require('./controllers/books'))







//Listen
app.listen(process.env.PORT)
