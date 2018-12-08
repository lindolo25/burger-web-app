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

    insertOne: function(id)
    {
        throw new Error("No Implemented Exeption.");
    },

    updateOne: function(id)
    {
        throw new Error("No Implemented Exeption.");
    }
}

module.exports = orm;