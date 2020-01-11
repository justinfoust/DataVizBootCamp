// @TODO: YOUR CODE HERE
yData = data.survival.map(x => Math.sqrt(x))

var trace1 = {
    y: yData,
    x: data.organ,
    boxpoints: "all",
    type: "box"
};

var layout = {
    title: "Cancer Survival from Treatment with Ascorbate",
    yaxis: { title: "Survival in Days"},
    xaxis: { title: "Organ Type"}
};

var data = [trace1];

Plotly.newPlot("plot", data, layout);