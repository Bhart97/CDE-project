var mysql = require("mysql");

// creates a connection pool to the MySQL db
// TODO: use Vaults to store secrets(?) to make API calls
var pool = mysql.createPool({
  connectionLimit : "",
  host            : "",
  user            : "",
  password        : "",
  database        : ""
});

module.exports.pool = pool;