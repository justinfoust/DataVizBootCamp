// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// @ADD YOUR CODE HERE
var labels = Object.keys(data.us);

function init() {
    data = [{
        values: us,
        labels: labels,
        type: 'pie'
    }];
    
    layout = {
        height: 600,
        width: 800
    };
    
    Plotly.newPlot("pie",data,layout);
}

d3.selectAll("#selDataset").on("change", updatePlotly);
             
function updatePlotly() {
    var dropDown = d3.select("#selDataset");
    var dataset = dropDown.property("value");
    
    if (dataset == "dataset1") {
        values = us;
    }
    
    if (dataset == "dataset2") {
        values = uk;
    }
    
    if (dataset == "dataset3") {
        values = canada;
    }
    
    Plotly.restyle("pie","values",[values]);
}

init ();