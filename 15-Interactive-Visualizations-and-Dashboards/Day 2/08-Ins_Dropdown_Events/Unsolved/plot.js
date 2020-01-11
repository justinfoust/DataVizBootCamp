function init() {
    data = [{
        x: [1,2,3,4,5],
        y: [1,2,3,8,16]
    }];
    
    Plotly.newPlot("plot", data);
}

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    
    var dropDown = d3.select("#selDataset");
    var dataset = dropDown.property("value");
    
    var x = [];
    var y = [];
    
    if (dataset == "dataset1") {
        x = [1,2,3,4,5];
        y = [1,2,4,8,16];
    }
    
    if (dataset == "dataset2") {
        x = [10, 20 ,30, 40, 50];
        y = [1,10,100,1000,10000];
    }
    
    Plotly.restyle("plot","x",[x]);
    Plotly.restyle("plot","y",[y]);
}

init();

