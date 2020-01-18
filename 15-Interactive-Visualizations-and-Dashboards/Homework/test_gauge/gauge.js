
var trace3 = {
    type: "scatterpolar",
    mode: "lines",
    r: [0,1,1,0],
    theta: [0,55,55,0],
    line: {
        color: 'red',
        width: 10
    }
};

var trace5 = {
    type: "pie",
    showlegend: false,
    textinfo: "text",
    textposition: "inside",
    rotation: 90,
    hole: 0.4,
    values: [100/10, 100/10, 100/10, 100/10, 100/10, 100/10, 100/10, 100/10, 100/10, 100/10, 100],
    text: [0,1,2,3,4,5,6,7,8,9],
}

//var trace4 =   {
//    type: "scatterpolar",
//    mode: "lines",
//    r: [0, 3.5, 3.5, 0],
//    theta: [0, 55, 75, 0],
//    fill: "toself",
//    fillcolor: '#E4FF87',
//    line: {
//      color: 'black'
//    }
//};

var data = [trace5];

var layout = {
    showlegend: false,
    polar: {
		sector: [0,180],
        radialaxis: {
            visible: false
        },
        angularaxis: {
            visible: false
        }
    }
};

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


//  type: 'pie',
//        showlegend: false,
//        hole: 0.4,
//        rotation: 90,
//        values: [ 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81],
//        text: ['0','1','2','3','4','5','6','7','8'],
//        direction: 'clockwise',
//        textinfo: 'text',
//        textposition: 'inside',
//        marker: {
//            colors: ['','','','','','','','','','white'],
//            labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//            hoverinfo: 'label'
//        }
//    };
//
//    var gaugeData = [gaugeTrace];
//
//    // needle
//    var degrees = 50, radius = .5
//    var radians = degrees * Math.PI / 180
//    var x = -1 * radius * Math.cos(radians) * samples.metadata[0].wfreq
//    var y = radius * Math.sin(radians)
//
//    var gaugeLayout = {
//        shapes: [{
//            type: 'line',
//            x0: 0.5,
//            y0: 0.5,
//            x1: 0.6,
//            y1: 0.6,
//            line: {
//                color: 'black',
//                width: 3
//            }
//        }],
//        title: 'Chart',
//        xaxis: {visible: false, range: [-1, 1]},
//        yaxis: {visible: false, range: [-1, 1]}
//    }

Plotly.newPlot("gauge-plot", data, layout);