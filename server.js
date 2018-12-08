require("dotenv").config();

var Express = require("express");
var bParser = require("body-parser");
var burgerController = require("./controllers/burgers_controller");
const port = process.env.PORT || 3000;


var app = Express();
app.use("/assets",Express.static("public"));
app.use(burgerController);


app.listen(port, () => console.log(`App listening on port ${port}!`));