const mysql = require("mysql");


//Create connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_db"
});

module.exports = conn;