var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "practice-db-erict98.cyiqr4kslqic.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password123!",
  database: "OCP"
});

connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
   
    console.log('Connected as id ' + connection.threadId);
});

module.exports.connection = connection;