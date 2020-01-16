
var trace3 = {
    type: "scatterpolar",
    mode: "lines",
    r: [1],
    theta: [55]
    
};

var data = [trace3];

//var trace1 = {
//    type: "barpolar",
//    r: [1,1,1,1,1],
//    theta: [0,36,72,108,144],
//    offset: 0,
//    width: 36,
//    marker: {
//        "color": [0,1,2,3,4]
//    }
//};
//
//var trace2 = {
//    type: "scatterpolor",
//    mode: "lines",
//    r: [0, 0.5, 0.5, 0],
//    theta: [0, 45, 45, 0],
//    line: {
//        color: "black",
//        width: 5
//    }
//};
//
//var trace3 = {
//    
//}
//
//var data = [trace2];
//
//var layout = {
//    polar: {
//        hole: 0.4,
//        angularaxis: {
//            showgrid: false
//        },
//        radialaxis: {
//            showgrid: false,
//            range: [0,1],
//            tickvals: []
//        },
//        bargap: 0.9,
//        sector: [0,100],
//        domain: {
//            x: [0,1]
//        },
//        sector: [0, 180]
//    },
//    showlegend: false
//};

//var traceA = {
//    type: "pie",
//    showlegend: false,
//    hole: 0.4,
//    rotation: 90,
//    values: [100 / 5, 100 / 5, 100 / 5, 100 / 5, 100 / 5, 100],
//    text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
//    direction: "clockwise",
//    textinfo: "text",
//    textposition: "inside",
//    marker: {
//        colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "white"]
//    },
//    labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
//    hoverinfo: "label"
//};
//
//var degrees = 180, radius = .6;
//var radians = degrees * Math.PI / 180;
//var x = -1 * radius * Math.cos(radians);
//var y = radius * Math.sin(radians);
// 
//var layout = {
//  shapes:[{
//      type: 'line',
//      x0: 0.5,
//      y0: 0.5,
//      x1: x,
//      y1: y,
//      line: {
//        color: 'black',
//        width: 8
//      }
//    }],
//  title: 'Number of Printers Sold in a Week',
//  xaxis: {visible: false, range: [-1, 1]},
//  yaxis: {visible: false, range: [-1, 1]}
//};
// 
//var data = [traceA];




Plotly.newPlot("gauge-plot", data);