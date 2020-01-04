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

insertRows(data)

var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

button.on("click", function() {
    tbody.html("")
    
    var filterParam = inputField.property("value");
    var filterData = data.filter(dataEntry => {
        return dataEntry.datetime = filterParam;
    });
    
    if (filterData == "") {
        insertRows(data);
    } else {
        insertRows(filterData);
    }
});