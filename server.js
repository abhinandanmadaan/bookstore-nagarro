const express = require("express");

const path = require("path");

let port = process.env.PORT || 3306;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/api", require("./routes/api").route);

app.listen(port, function() {
  console.log("Server started on http://localhost " + port + "/");
});
