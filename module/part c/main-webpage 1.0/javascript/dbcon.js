/* This JavaScript will handle the DB connections and all HTTPs requests
   DB schema: cohorts > First Name | Last Name | Cohort | Technical Track | Location | Profile */

class Database {
  #mysql;
  #pool;
  #statement;

  constructor() {
    this.#mysql = require("mysql");

    this.pool = mysql.createPool({
      connectionLimit : "",
      host            : "",
      user            : "",
      password        : "",
      database        : ""
    });

    statement = "";
  }

  /**
   * Queries the database and returns the table. Only called when user updates the params
   * 
   * @return {object array} table ([ {row1}, {row2}, ..., {rowN} ])
   */
  createTable(params) {
    statement = "SELECT * FROM cohorts WHERE";
    if (params.length > 0) {
      statement += " cohort = ?";
      for (let i = 0; i < params.length - 1; i++) {
        statement += " OR cohort = ?";
      }
    // if no parameters were selected, return an empty result
    } else {
      statement += " false";
    }

    pool.query(statement, params, function(err, result, fields) {
      if (err) {
        console.log(err);
        next(err);
        return;
      } else { return result; }});
  }

  updateTable(params) {

  }
}
