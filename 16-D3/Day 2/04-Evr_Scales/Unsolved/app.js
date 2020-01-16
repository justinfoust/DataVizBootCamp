//var dataArr = [10,20,2000];
//
//console.log("min val ", d3.min(dataArr));
//console.log("max val ", d3.max(dataArr));
//console.log("min and max val ", d3.extent(dataArr));
//
//var testScores = [10,20,30,50,75,86,91,105];

//var yScale = d3.scaleLinear()
//                    .domain([0,100])
//                    .range([0,1000])
//
//console.log(`50 returns ${yScale(50)}`);
//console.log(`50 returns ${yScale(100)}`);
//console.log(`50 returns ${yScale(75)}`);
//console.log(`50 returns ${yScale(500)}`);

//var svgHeight = 1000;
//
//var yScale = d3.scaleLinear()
//                .domain([0, d3.max(testScores)])
//                .range([0, svgHeight])
//
//console.log(`50 returns ${yScale(50)}`);
//console.log(`50 returns ${yScale(75)}`);
//console.log(`50 returns ${yScale(95)}`);

var svgHeight = 600,
    svgWidth = 1000;

var testScores = [89,85,75,90];
var students = ["Han", "Sarah", "matt", "Ruchi"];

var xScale = d3.scaleBand()
                .domain(students)
                .range([0, svgWidth]);

console.log(`Han's x-coord: ${xScale("Han")}`);
console.log(`Sarah's x-coord: ${xScale("Sarah")}`);
console.log(`Ruchi's x-coord: ${xScale("Ruchi")}`);
console.log(`Each band is ${xScale.bandwidth()} pixel's wide`);