// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiamZvdXN0IiwiYSI6ImNrNW9veTVtazA0eHQza3FoZmI3b3gxNDgifQ.ecvXzuUG2FS0X3E5SoyAkw"
}).addTo(myMap);

// Create a red circle over Dallas
L.circle([32.7767, -96.7970], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 50000
}).addTo(myMap);

// Connect a black line from NYC to Toronto
var line = [
    [40.7128, -74.0060],
    [43.6008, -79.5053]
];

L.polyline(line, {
    color: "black",
    weight: 100
}).addTo(myMap);

// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
