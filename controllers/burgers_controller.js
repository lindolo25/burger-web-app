var Express = require("express");
var router = Express.Router();


router.get('/', function (req, res) 
{
    res.send('Home Page');
});

router.post('/api/burgers', function (req, res) 
{
    res.send('About birds');
});

router.post('/api/burgers/:id', function (req, res) 
{
    res.send('About birds');
});

module.exports = router;