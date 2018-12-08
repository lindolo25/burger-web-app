require("dotenv").config();

var Express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars')
var burgerController = require("./controllers/burgers_controller");
const port = process.env.PORT || 3000;


var app = Express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use("/assets",Express.static("public"));
app.use(burgerController);


app.listen(port, () => console.log(`App listening on port ${port}!`));