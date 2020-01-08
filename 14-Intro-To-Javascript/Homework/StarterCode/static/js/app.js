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
var cityFilter = d3.select("#city");
var stateFilter = d3.select("#state");
var countryFilter = d3.select("#country");
var shapeFilter = d3.select("#shape");


button.on("click", function() {
    tbody.html("");
    
    var filterData = tableData
    
    var datetimeParam = datetimeFilter.property("value");
    var cityParam = cityFilter.property("value");
    var stateParam = stateFilter.property("value");
    var countryParam = countryFilter.property("value");
    var shapeParam = shapeFilter.property("value");
    
    
    if (datetimeParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.datetime == datetimeParam
        });
    }
    
    if (cityParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.city == cityParam
        });
    }
    
    if (stateParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.state == stateParam
        });
    }
    
    if (countryParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.country == countryParam
        });
    }
    
    if (shapeParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.shape == shapeParam
        });
    }
    
    
    insertRows(filterData);
});