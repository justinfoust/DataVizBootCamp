// Initializes the page with a default plot
data = [{
    x: [1,2,3,4,5],
    y: [1,2,3,4,5]
}];

Plotly.newPlot("plot",data);

// Call updatePlotly() when a change takes place to the DOM



d3.selectAll("body").on("change", updatePlotly);

function updatePlotly() {
    var dropDown = d3.select("#selDataset");
    var dataset = dropDown.property("value");
    
    x = [];
    y = [];
    
    switch(dataset) {
        case "dataset1":
            x = [1, 2, 3, 4, 5];
            y = [1, 2, 3, 4, 5];
            break;
        case "dataset2":
            x = [1, 2, 3, 4, 5];
            y = [1, 2, 4, 8, 16];
            break;
        case "dataset3":
            x = [10, 20, 30, 40, 50];
            y = [1, 10, 100, 1000, 10000];
            break;
        default:
            x = [100, 200, 300, 400, 500];
            y = [10, 100, 50, 10, 0];
            break;
    }
    
    
    Plotly.restyle("plot","x",[x]);
    Plotly.restyle("plot","y",[y]);
}

// This function is called when a dropdown menu item is selected

  // Use D3 to select the dropdown menu

  // Assign the value of the dropdown menu option to a variable


  // Initialize x and y arrays



  // Note the extra brackets around 'x' and 'y'
