var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("body")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var chartGroup = svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("donuts.csv").then(function(doData) {
    console.log(doData);
    
    var parseTime = d3.timeParse("%d-%b");

    doData.forEach(function(data) {
        data.date = parseTime(data.date);
        data.morning = +data.morning;
        data.evening = +data.evening;
    });
    
    var xTimeScale = d3.scaleTime()
    .domain(d3.extent(doData, d => d.date))
    .range([0, width]);
    
    var yLinearScale = d3.scaleLinear()
    .range([height, 0]);
    
    var morningMax = d3.max(doData, d => d.morning);
    var eveningMax = d3.max(doData, d => d.evening);
    
    var yMax;
    if (morningMax > eveningMax) {
        yMax = morningMax;
    } else {
        yMax = eveningMax;
    }
    
    yLinearScale.domain([0, yMax]);
                          
    var bottomAxis = d3.axisBottom(xTimeScale)
        .tickFormat(d3.timeFormat("%d-%b"));
    
    var leftAxis = d3.axisLeft(yLinearScale);
    
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
    
    chartGroup.append("g")
        .call(leftAxis);
    
    var line1 = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.morning));
    
    var line2 = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.evening));
    
    chartGroup.append("path")
        .attr("d", line1(doData))
        .classed("line green", true);
    
    chartGroup.data([doData])
        .append("path")
        .attr("d", line2(doData))
        .classed("line orange", true);
});