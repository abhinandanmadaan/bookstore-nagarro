const User = require('../../db').User
const Book = require('../../db').Book
const route = require('express').Router();


route.post('/', (req, res) => {



  // Add a new listing
   /* Book.create({
     seller: req.body.seller,
     name: req.body.name,
    price: req.body.price,
    author: req.body.author,
    condition: req.body.condition,
    img: req.body.imageUrl
}).then(() => {
    res.send(true)
}).catch((error) => {
    res.status(501).send({
        error: "Error adding listing"
    })
})


  })
 */

Book.findOrCreate({where: {seller: req.body.seller , name: req.body.name , price: req.body.price , author: req.body.author , condition: req.body.condition} ,
defaults: {seller: req.body.seller , name: req.body.name , price: req.body.price , author : req.body.author , condition: req.body.condition , img: req.body.imageUrl}})
.spread((book , created) => {

          if(created){

            book.save().then(() => {


              res.send(true)




            })

          }

          else{
            res.send(false);
          }





      })

})





  exports = module.exports = route
