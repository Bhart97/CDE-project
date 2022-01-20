/* This JavaScript executes and generates data on the HTML */

//var db = require("./dbcon.js")
var listOfCohorts = ['Alpha',                   // update when more tables are added to the database
    'Bravo', 'Charlie', 'Delta']; 

window.onload = function () {
    displayOptions();
    sortDemo();
}

/**
 * Generates the options to select which cohort to query.
 * 
 * Creates the checkbox based on the cohorts listed above.
 */
function displayOptions() {
    let options = document.getElementById("cohort-options");
    for (let i = 0; i < listOfCohorts.length; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("cohort-checkbox");
        checkbox.name = listOfCohorts[i][0];
        checkbox.value = listOfCohorts[i];

        let label = document.createElement("label");
        label.for = listOfCohorts[i][0];
        label.innerHTML = listOfCohorts[i];
        options.append(checkbox);
        options.append(label);
    }

    // TODO: replace generateDemo with generateTable
    let button = document.createElement("button");
    button.addEventListener("click", generateDemo)
    button.style.float = "right";
    button.innerHTML = "search";
    options.append(button);
}

/**
 * Performs SQL query with the selected options.
 */ 
function generateTable() {
    // clears the table
    let table = document.getElementById("main-table");
    table.innerHTML = "";

    // builds the query and searches
    let options = document.getElementsByClassName("tab-checkbox");
    var params = [];
    for (let i = 0; i < options.length; i++) {
        params.append(options[i].value);
    }
    let data = db.createTable(params);  

    // creates the columns
    let header = Objects.keys(data);
    table.append(createHeader(header));

    // creates the rows
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        table = document.append(createRow(row));
    }
}

/**
 * Generates a header row based on the given list and provides an option to sort.
 * 
 * @param   {String array} cols 
 * @returns {DOM}          tr
 */
function createHeader(cols) {
    let tr = document.createElement("tr");
    for (let col in cols) {
        let th = document.createElement("th");
        
        let upArrow = document.createElement("div");
        upArrow.classList.add("up-arrow");
        let downArrow = document.createElement("div");
        downArrow.classList.add("down-arrow");

        th.appendChild(col);
        th.appendChild(upArrow);
        th.appendChild(downArrow);
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
    let tr = document.createElement("tr");
    for (let col in row) {
        let td = document.createElement("td");
        td.appendChild(row[col]);
        tr.appendChild(td);
    }
    return tr;
}

function sortTable() {

}

/**
 * Test methods
 */

/** 
 * Displays the information about the selected cohort. 
 * 
 * Assumes cohort Alpha corresponds to the first box and etc.
 * Marks the selected cohort as visible, otherwise hidden.
 * TODO: remove when MySQL is implemented
 */
 function generateDemo() {
    let cb = document.getElementsByClassName("cohort-checkbox");
    let cohorts = document.getElementsByClassName("cohort");
    for (let i = 0; i < cohorts.length; i++) {
        if (cb[i].checked) {
            cohorts[i].style.display = "block";
        } else {
            cohorts[i].style.display = "none";
        }
    }
}

function sortDemo() {
    let table = document.getElementById("main-table");
    col = table.rows[0].cells;

    for (let i = 0; i < col.length; i++) {
        let th = col[i];

        let upArrow = document.createElement("div");
        upArrow.classList.add("up-arrow");
        let downArrow = document.createElement("div");
        downArrow.classList.add("down-arrow");

        th.appendChild(upArrow);
        th.appendChild(downArrow);
    }
}