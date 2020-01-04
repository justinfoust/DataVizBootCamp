// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("#table_entries");

function insertRows(dataInput) {
    dataInput.forEach((sightings) => {
        var row =  tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

insertRows(tableData)

var button = d3.select("#filter-btn");
var datetimeFilter = d3.select("#datetime");
var countryFilter = d3.select("#country");

button.on("click", function() {
    tbody.html("");
    
    var filterData = tableData
    
    var datetimeParam = datetimeFilter.property("value");
    var countryParam = countryFilter.property("value");
    
    console.log(datetimeParam);
    console.log(countryParam);
    
    if (datetimeParam != "") {
        console.log("date filter");
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.datetime = datetimeParam
        });
    }
    
    if (countryParam != "") {
        console.log("country filter");
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.country = countryParam
        });
    }
    
    var returnData = filterData.filter().filter().filter()
    
    insertRows(filterData);
});