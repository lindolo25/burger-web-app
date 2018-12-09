const Express = require("express");
const orm = require("../config/orm");
var router = Express.Router();


router.get('/', function (req, res) 
{
    orm.selectAll(function(result)
    {
        var burgersResult = {
            burgers: [],
            devoured: []
        }
        
        if(result)
        {
            burgersResult.burgers = result.filter( burger => !burger.devoured );
            burgersResult.devoured = result.filter( burger => burger.devoured );
        }
        res.render('index', burgersResult);
    });    
});

router.post('/api/burgers', function (req, res) 
{
    res.send('About birds');
});

router.put('/api/burgers/:id', function (req, res) 
{
    if(req.params.id && req.body.devoured)
    {
        orm.updateOne(req.params.id, function(result)
        {
            result ? res.json(true) : res.json(false);
        })
    }
    else res.json(false);
});

module.exports = router;