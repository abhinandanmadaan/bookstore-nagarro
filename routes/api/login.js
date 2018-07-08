const User = require('../../db').User
const route = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

route.post('/', (req, res) => {

  User.findOne({
    where: {email: req.body.email}
  }).then(user => {

    bcrypt.compare(req.body.password, user.password)
    .then(function(result) {

      if(result===true)
      {

       let payload = {userId: user.id , userName: user.name}
       let token = jwt.sign(payload , 'secretkey' , { expiresIn: "1h" })

        res.send({token:token})

      }

      else{
        res.send(false);      }

     });

  })
  .catch(err => {

    res.send(false)
  })









  })

  exports = module.exports = route ;
