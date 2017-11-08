//mysql connection

var mysql = require('mysql');
var db_cfg = require("./config/db_cfg.json");

var con = mysql.createConnection({
    host: cfg.host,
    user: cfg.user,
    password: cfg.pass,
    database: cfg.db
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "Creat DATABASE mydb";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });   
});