const express = require('express')
const app = express()
const port = 3000

app.set("port", port);
app.use(express.static(__dirname + '/public')); // allows for static files (images, CSS, etc.) to load properly

// default home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

/**
 * Performs SQL queries.
 * "/creates" receives a GET request and returns "SELECT * FROM table"
 * "/search" receives a GET request and returns based on given parameters
 */
var mysql = require("./dbcon.js");

app.get("/cohorts", function(req, res, next) {
    mysql.connection.query("SELECT DISTINCt cohort FROM cohorts ORDER BY cohort", function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        res.type("application/json");
        res.send(rows);
    });
});

app.get("/create", function(req, res, next) {
    mysql.connection.query("SELECT * FROM cohorts", function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        res.type("application/json");
        res.send(rows);
    });
});

app.get("/search", function(req, res, next) {
    if (req.query.cohorts.length == 0) {
        req.query.cohorts = "NULL";
    }
    mysql.connection.query("SELECT * FROM cohorts WHERE cohorts IN ?, ORDER BY ? ?", [req.query.cohorts, req.query.order, req.query.sort], function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        res.type("application/json");
        res.send(rows);
    })
});
