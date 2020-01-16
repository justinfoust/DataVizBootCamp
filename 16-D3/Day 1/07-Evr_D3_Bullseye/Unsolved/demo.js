var svg = d3.select("body").append("svg");

svg.attr("width", "100px")
    .attr("height", "100px");

var rValues = [40, 25, 10];


svg.selectAll("circle")
    .data(rValues)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", d => d)
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");