/* This JavaScript will handle the DB connections and all HTTPs requests */

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

function create_table() {
  pool.query("SELECT * FROM [...]", function(err, rows, fields) {
    if (err) {
      next(err);
      return;
    }
  });
}

window.onbeforeunload = function(evt) {
  pool.end(function(err) { /* ends the connection to the pool */ } );
}