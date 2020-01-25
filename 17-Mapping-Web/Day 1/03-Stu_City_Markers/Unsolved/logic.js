
var places = [
    {
        coordinates: [40.712, -74.006],
        name: "New York City",
        state: "New York"
    },{
        coordinates: [41.878, -87.629799],
        name: "Chicago",
        state: "Illinois"
    },{
        coordinates: [29.760, -95.369],
        name: "Houston",
        state: "Texas"
    },{
        coordinates: [34.052, -118.243],
        name: "Los Angeles",
        state: "California"
    },{
        coordinates: [41.256, -95.934],
        name: "Omaha",
        state: "Nebraska"
    }
]

// Create a map object
var myMap = L.map("map", {
    center: [places.map(d => d.coordinates[0]).reduce((a,b) => a + b) / places.length, places.map(d => d.coordinates[1]).reduce((a,b) => a + b) / places.length],
    zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;

var places = [
    {
        coordinates: [40.712, -74.006],
        name: "New York City",
        state: "New York"
    },{
        coordinates: [41.878, -87.629799],
        name: "Chicago",
        state: "Illinois"
    },{
        coordinates: [29.760, -95.369],
        name: "Houston",
        state: "Texas"
    },{
        coordinates: [34.052, -118.243],
        name: "Los Angeles",
        state: "California"
    },{
        coordinates: [41.256, -95.934],
        name: "Omaha",
        state: "Nebraska"
    }
]

places.map(d => {
    L.marker(d.coordinates)
    .bindPopup(`<h1>${d.name}</h1><hr><h3>${d.state}</h3>`)
    .addTo(myMap);
})

L.polygon(places.map(d => d.coordinates), {
    color: "red",
    fillColor: "yellow",
    fillOpacity: 0.75
}).addTo(myMap);

places.map(d => {
L.circle(d.coordinates, {
  color: "black",
  fillColor: "blue",
  fillOpacity: 0.75,
  radius: 50000
}).addTo(myMap);
});