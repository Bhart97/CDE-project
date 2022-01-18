/** 
 * Displays the information about the selected cohort. 
 * 
 * Queries for the selected cohort based on the marked checkboxes
 * 
 */
function displayInfo() {
    // reveals the selected cohort and hides others
    var cb = document.getElementsByClassName("tab-checkbox");
    var cohorts = document.getElementsByClassName("cohort");
    cohorts[0].style.visibility = "hidden";
    for (n = 0; n < cohorts.length; n++) {
        if (cb[n].checked) {
            cohorts[n].style.visibility = "visible";
        } else {
            cohorts[n].style.visibility = "hidden";
        }
    }
}

/**
 * Generates the information for each cohort.
 * 
 * Information is auto-generated.
 * 
 */ 
function generateInfo() {
    cohorts = ['A', 'B', 'C', 'D']          // modify this list when more cohorts are added
    var db = require("./mysql.js")          // allows for modularity of db
}