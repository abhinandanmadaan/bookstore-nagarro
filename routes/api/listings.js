const Book = require('../../db').Book
const route = require('express').Router();

route.get('/', (req, res) => {


    Book.findAll()
        .then((books) => {
            res.status(200).send(books)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                error: "Could not retrieve books"
            })
        })
})



exports = module.exports = route;
