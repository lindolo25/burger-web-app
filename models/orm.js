var conn = require("./connection");

var orm = {
    
    selectAll: function(cb)
    {
        conn.query("SELECt * FROM burgers", function(error, result)
        {
            if(error)
            {
                console.log("Query error:" + error.stack);
                cb(null);
            }
            else cb(result);
        });
    },

    insertOne: function(burgerName, cb)
    {
        conn.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(error, result)
        {
            if(error)
            {
                console.log("Query error:" + error.stack);
                cb(null);
            }
            else cb(result);
        });
    },

    updateOne: function(id, cb)
    {
        conn.query("UPDATE burgers SET devoured = ? WHERE burger_id = ?", [true, id], function(error, result)
        {
            if(error)
            {
                console.log("Query error:" + error.stack);
                cb(null);
            }
            else cb(result);
        });
    }
}

module.exports = orm;