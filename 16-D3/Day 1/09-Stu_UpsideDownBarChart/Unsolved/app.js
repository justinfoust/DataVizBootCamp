// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE
var svgHeight = 600;
var svgWidth = 400;

var svg = d3.select("#svg-area").append("svg")

svg.attr("width", svgWidth)
    .attr("height", svgHeight)

// Vertical Bar Chart
// YOUR CODE HERE
//svg.selectAll("rect")
//    .data(booksReadThisYear).enter()
//    .append("rect")
//    .attr("x", (d, i) => i * 15)
//    .attr("y", 0)
//    .attr("width", 14)
//    .attr("height", d => d)
//    .classed("bar", true);

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE
svg.selectAll("rect")
    .data(booksReadThisYear).enter()
    .append("rect")
    .attr("x", (d, i) => i * 15)
    .attr("y", d => 50 - d)
    .attr("width", 14)
    .attr("height", d => d)
    .classed("bar", true);

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
