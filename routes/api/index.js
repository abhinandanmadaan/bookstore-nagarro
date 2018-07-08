const route = require("express").Router();

route.use("/listings", require("./listings"));
route.use("/signup", require("./signup"));
route.use("/login", require("./login"));
route.use("/add", require("./add"));
route.use("/list-item", require("./list-item"));
route.use("/wishlist", require("./wishlist"));
route.use("/check-auth", require("./check-auth"));
route.use("/add_to_wishlist", require("./add_to_wishlist"));

exports = module.exports = { route };
