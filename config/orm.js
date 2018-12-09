var conn = require("./connection");

var orm = {
    
    selectAll: function(cb)
    {
        conn.query("SELECt * FROM burgers", function(error, result)
        {
            if(error)
            {
                console.log("Query error.");
                cb(null);
            }
            else cb(result);
        });
    },

    insertOne: function(id, cb)
    {
        throw new Error("No Implemented Exeption.");
    },

    updateOne: function(id, cb)
    {
        conn.query("UPDATE burgers SET devoured = ? WHERE burger_id = ?", [true, id], function(error, result)
        {
            if(error)
            {
                console.log("Query error.");
                cb(null);
            }
            else cb(result);
        });
    }
}

module.exports = orm;