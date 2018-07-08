
const Wishlist = require('../../db').Wishlist
const route = require('express').Router();

route.post('/', (req, res) => {


    Wishlist.findAll({
      where:{
        userId: req.body.userId
      }

    }).then((books) => {
          console.log('here in wishlist.js')
          console.log(books);
            res.status(200).send(books)
        })
        .catch((err) => {

            res.status(500).send({
                error: "Could not retrieve books"
            })
        })
})



exports = module.exports = route;


