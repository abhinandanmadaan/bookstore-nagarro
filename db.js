const Sequelize = require('sequelize')

// const db = new Sequelize('sql12246641', 'sql12246641', ' T4w9Vp36s2', {
//     host: ' sql12.freemysqlhosting.net',
//     dialect: 'mysql'
// })

const db = new Sequelize({
    // username: 'root',
    // password: 'root',
    // database: 'lms',
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'data.db',   
  });

const User = db.define('users', {

    name:
    {
       type: Sequelize.STRING,
      allowNull: false,
    },
    email:
    {
      type: Sequelize.STRING,
      allowNull: false,
    },

    college:
    {
      type: Sequelize.STRING,
      allowNull: false,
    },

    address:
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone:
    {
      type: Sequelize.STRING,
      allowNull: false,
    },

    password:
    {
      type: Sequelize.STRING(1234),
      allowNull: false,
    }

}) ;

const Book = db.define('books', {

    name:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    author:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    price:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    img:
    {
        type: Sequelize.STRING(1234),
        //  allowNull: false
    },

    condition:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    seller:
    {
        type: Sequelize.STRING,
        allowNull: false
    },


}) ;





 const Wishlist = db.define('wishlists', {

   userId:
  {
      type: Sequelize.FLOAT,

  },

  bookId:
  {
      type: Sequelize.FLOAT
  },

  name:
  {
      type: Sequelize.STRING,

  },

  author:
  {
      type: Sequelize.STRING,

  },

  price:
  {
      type: Sequelize.FLOAT,

  },

  img:
  {
      type: Sequelize.STRING(1234),
      //  allowNull: false
  },

  condition:
  {
      type: Sequelize.STRING,

  },

  seller:
  {
      type: Sequelize.STRING,

  },


}) ;














/*
 db.sync().then(function () {
  Book.create({
     name:'Introduction to Algorithms',
     author: 'Thomas H. Cormen',
     price: 900,
     img :'https://upload.wikimedia.org/wikipedia/en/4/41/Clrs3.jpeg',
     condition:'new',
     seller: 'divyan soni'
  }).then(function (data) {

 })
}) */
// const Cart = db.define('cart', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     product_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     manufacturer: Sequelize.STRING,
//     price: {
//         type: Sequelize.FLOAT,
//         allowNull: false,
//         defaultValue: 0.0
//     },
//     quantity:{
//     type :  Sequelize.INTEGER,
//       defaultValue: 1
//     },
//     amount:{
//       type : Sequelize.FLOAT
//
//     }
//
//
// })

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
     Book , User , Wishlist
}
