// @TODO: YOUR CODE HERE
//var data = temps

var y0 = [];
var y1 = [];
//var xData = ["New York", "Houston"]

var trace1 = {
    y: temps.newyork,
    name: "New York",
    boxpoints: "all",
    type: "box"
};

var trace2 = {
    y: temps.newyork,
    name: "Houston",
    boxpoints: "all",
    type: "box"
};

var layout = {
    title: "Temperatures 06/2014 - 06/2015",
    yaxis: { title: "Degrees (F)"}
};

var data = [trace1, trace2];

Plotly.newPlot("plot", data, layout);