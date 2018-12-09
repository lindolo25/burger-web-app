var mysql = require("mysql");
var conn = null;

var connObj = {
    
    query: function(query, params, cb)
    {
        if(cb === undefined) 
        {
            cb = params;
            params = [];
        }

        this.open(function(err)
        {
            if (err) 
            {
                console.error('error connecting: ' + err.stack);
                cb(err, null);
                return;
            }

            conn.query(query, params, function (error, results)
            {
                connObj.close();
                cb(error, results);
            })
        });
    },

    open: function(cb)
    {   
        conn = mysql.createConnection({
            host     : process.env.MYSQL_HOST,
            user     : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASS,
            database : process.env.MYSQL_DB
        });
        conn.connect(cb)
    },

    close: function()
    {
        if(conn)
        {
            conn.end();
        }
    }
} 

module.exports = connObj;