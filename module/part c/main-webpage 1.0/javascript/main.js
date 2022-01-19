/* This JavaScript executes and generates data on the HTML */

//var db = require("./dbcon.js")
var listOfCohorts = ['Alpha',           // update when more tables are added to the database
    'Bravo', 'Charlie', 'Delta'] 

var cohortsInformation = []             // [ {"Alpha" : DOM table"}, {"Bravo" : DOM table}, ...]

for (let cohort of listOfCohorts) {
    let n = {};
    n[cohort] = "";
    cohortsInformation.push(n);
}


/** 
 * Displays the information about the selected cohort. 
 * 
 * Assumes cohort Alpha corresponds to the first box and etc.
 * Marks the selected cohort as visible, otherwise hidden.
 * TODO: remove when MySQL is implemented
 */
function displayInfo() {
    let cb = document.getElementsByClassName("tab-checkbox");
    let cohorts = document.getElementsByClassName("cohort");
    for (let i = 0; i < cohorts.length; i++) {
        if (cb[i].checked) {
            cohorts[i].style.display = "block";
        } else {
            cohorts[i].style.display = "none";
        }
    }
}

/**
 * Displays the information about the selected cohort.
 * 
 * Generates a new table each time it is called and assumes that
 * cohort Alpha corresponds to the first table.
 */
function displayInfo2() {
    let cb = document.getElementsByClassName("tab-checkbox");
    let table = document.getElementById("mainTable");
    table.innerHTML = "";                                       // resets the table
    for (let i = 0; i < listOfCohorts.length; i++) {
        let cohort = listOfCohorts[i];
        if (cb[i].checked) {
            table.append(cohortsInformation[cohort]);           // appends the subtable to the main table
        }
    }
}

/**
 * Generates the DOM table for each cohort from the SQL query.
 * 
 * Assumes a non-empty query where the first row belongs to
 * cohort Alpha and in descending order.
 */ 
function generateTable() {
    let data = db.createTable();
    let index = 0;
    let partition = "Alpha";

    // generates a new DOM table for each cohort-specific data
    for (let cohort in cohortsInformation) {
        let newTable = document.createElement(table);               // creates the table
        newTable.appendChild(Objects.keys(data));                   // appends the columns
        let row = data[index];

        while (index < row.length && partition == row.cohort) {
            row = data[index];
            newTable.append(createRow(row));
            index++;
        }

        cohortsInformation[cohort] = newTable;                      // appends the table to the corresponding cohort
        table.style.display = none;                                 // hides the table
        partition = row.cohort;                                      // updates to the next cohort

    }
}

/**
 * Generates a header row based on the given list.
 * 
 * @param   {String array} cols 
 * @returns {DOM}          tr
 */
function createHeader(cols) {
    let tr = document.createElement(tr);
    for (let col in cols) {
        let th = document.createElement(th);
        th.appendChild(col);
        tr.appendChild(th);
    }
    return tr;
}

/**
 * Generates a new row based on the given object.
 * 
 * @param   {object} row 
 * @returns {DOM}    tr
 */
function createRow(row) {
    let tr = document.createElement(tr);
    for (let col in row) {
        let td = document.createElement(td);
        td.appendChild(row[col]);
        tr.appendChild(td);
    }
    return tr;
}

// TODO: make the table sortable