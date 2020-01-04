// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
var greatestIncrease = top15Cities.filter(x => parseInt(x.Increase_from_2016) > 15000);

// 2. Use filter() to pass the function as its argument


// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(greatestIncrease);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var filteredCities = greatestIncrease.map(x => x.City);

//  Check your filtered cities
console.log(filteredCities);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var filteredPopulations = greatestIncrease.map(x => parseInt(x.population));

//  Check the populations of your filtered cities
console.log(filteredPopulations);

// 5. Create your trace.
var trace1 = [{
    x: filteredCities,
    y: filteredPopulations,
    type: "bar"
}];

// 6. Create the data array for our plot


// 7. Define our plot layout
layout = {
    title: "Cities with Greatest Population Increase",
    xaxis: {title: "Cities"},
    yaxis: {title: "Population Increase"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", trace1, layout);


