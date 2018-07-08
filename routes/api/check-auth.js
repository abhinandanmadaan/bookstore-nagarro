const jwt = require("jsonwebtoken");
const route = require('express').Router();

 route.post('/', (req, res) => {

  try {
    const token = req.body.token;
    payload = jwt.verify(token, "secretkey");
    res.send(payload);

  } catch (error) {
    res.send(false);
  }

 })


   /* if(!req.headers.authorization){
    res.send(false);

  }
  let token = req.headers.authorization.split(' ')[1]

  if(token === 'null'){
    res.send(false);

  }

  let payload = jwt.verify(token , 'secretkey')

  if(!payload){
    res.send(false);


  }

  res.send(true);

}) */






/* module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_this_should_be_longer");
    next();
  } catch (error) {
    res.send(false);
  }
};
 */
exports = module.exports = route ;

