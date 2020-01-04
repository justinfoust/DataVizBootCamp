function randomNumberGenerator(n) {
    var randomNumberArray = [];
    for (var i=0; i < n; i++) {
        randomNumberArray.push(Math.floor(Math.random() * 9));
    }
    
    return randomNumberArray;
}

console.log(randomNumberGenerator(4));

var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumberGenerator(5),
    type: "scatter"
};

var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumberGenerator(5),
    type: "scatter"
};

var data = [trace1, trace2];

Plotly.newPlot("plot", data);