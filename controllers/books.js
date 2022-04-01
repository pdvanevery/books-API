const router = require('express').Router()
const mongodb = require('mongodb')
const { db } = require('../models/book_model.js')
const Book = require('../models/book_model.js')

//Seed Data
router.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

//Index
router.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        console.log('err', err)
        res.sendStatus(404)
    })
})

//Show
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.json(foundBook)
        })
        .catch(err => {
            console.log('err', err)
            res.sendStatus(404)
        })
})

//Create
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(newBook => {
        res.json(newBook)
    })
    .catch(err => {
        console.log('err', err)
        res.sendStatus(404)
    })
})

//Delete
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete({_id: req.params.id})
    .then(deletedBook => {
        res.json(deletedBook)
    })
})

//Update (put)
router.put('/:id' , (req, res) => {
   Book.findByIdAndUpdate(req.params.id, req.body)
    .then(updateBook => {
        console.log(updateBook)
        res.json(updateBook)
    })
})

module.exports = router