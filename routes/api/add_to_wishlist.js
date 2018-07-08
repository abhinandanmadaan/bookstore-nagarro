const Book = require('../../db').Book
const Wishlist = require('../../db').Wishlist
const route = require('express').Router();


route.post('/', (req, res) => {


  Wishlist.findOrCreate({where: {userId: req.body.userId , bookId: req.body.bookId }})
  .spread((wish , created) => {

            if(created){
              Book.findOne({
                where: {
                  id: req.body.bookId
                }
              }).then(bk =>{
                wish.update({
                  name: bk.name,
                  author:  bk.author,
                  price:  bk.price,
                  img:  bk.img,
                  condition:  bk.condition,
                   seller: bk.seller

                }).then(() => {res.send(true);})





              })






              }
              else{
                res.send(false);
              }

            })







        })





exports = module.exports = route
