// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var bar = d3.select("#svg-area").append("svg");

bar.attr("width", "100px")
    .attr("height", "100px");

// Append a rectangle and set its height in relation to the booksReadThisYear value

bar.selectAll("rect")
    .data(booksReadThisYear).enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 15)
    .attr("height", d => d)
    .classed("bar", true);