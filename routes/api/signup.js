const User = require('../../db').User
const route = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


route.post('/', (req, res) => {

bcrypt.hash(req.body.password, 10).then((hash) =>{


  User.findOrCreate({where: {email : req.body.email} , defaults: {name: req.body.name , college: req.body.college , address: req.body.address , phone : req.body.phone , password: hash}})
  .spread((user , created) => {

            if(created){

              user.save().then(() => {

                let payload = {userId: user.id , userName: user.name}
                let token = jwt.sign(payload , 'secretkey' , { expiresIn: "1h" })
                res.send({token:token})




              })

            }

            else{
              res.send(false);
            }





        })


})




})

exports = module.exports = route ;
