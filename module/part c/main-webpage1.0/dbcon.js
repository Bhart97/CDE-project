var mysql = require("mysql");

var connection = mysql.createConnection({

});

connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
   
    console.log('Connected as id ' + connection.threadId);
});

module.exports.connection = connection;