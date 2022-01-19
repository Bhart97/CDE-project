/* This JavaScript will handle the DB connections and all HTTPs requests
   DB schema: cohort.db > tables named after each cohort (Alpha, Bravo, etc.) > Name | Cohort | Technical Track | Location | Profile */

var mysql = require("mysql");

/**
 * Creates a connection pool to the MySQL database
 * 
 * TODO: store the secrets via Vaults services
 */
var pool = mysql.createPool({
  connectionLimit : "",
  host            : "",
  user            : "",
  password        : "",
  database        : ""
});

/**
 * Queries the database and returns the table. Assumes the table is named "cohort".
 * 
 * @return {object array} table ([ {row1}, {row2}, ..., {rowN} ])
 */

function createTable() {
  pool.query("SELECT * FROM cohort", function(err, result, fields) {
    if (err) {
      console.log(err);
      next(err);
      return;
    } else {
      return result
    }
  });
}

module.exports = {
  createTable
}
