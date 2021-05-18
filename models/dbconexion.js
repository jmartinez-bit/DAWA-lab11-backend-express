var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"tiendalab11"
});
conn.connect();
module.exports = conn;
