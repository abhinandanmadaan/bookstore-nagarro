const Book = require('../../db').Book
const route = require('express').Router();


route.post('/', (req, res) => {

  Book.findOne({
    where: {id: req.body.id}
  }).then(book => {
      res.send(book)
  })

})
exports = module.exports = route;
