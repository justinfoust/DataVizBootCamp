// Sort the data by Greek search results
var sortedData = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
var firstTen = sortedData.slice(0, 10);

console.log(firstTen);
// Reverse the array to accommodate Plotly's defaults
var reversed = firstTen.reverse();

console.log(reversed);
// Trace1 for the Greek Data
var trace1 = {
    type: "bar",
    x: reversed.map(x => x.greekSearchResults),
    y: reversed.map(x => x.greekName),
    orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout

layout = {
    title: "Greek Gods Search Results",
    xaxis: {
        title: "Number of Hits"
    },
    yaxis: {
        title: "Names"
    }
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);