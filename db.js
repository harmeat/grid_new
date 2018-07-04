var mysql = require('mysql')

//Mysql Connection

var connectSql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "grid_component",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

connectSql.connect();

module.exports = connectSql;
