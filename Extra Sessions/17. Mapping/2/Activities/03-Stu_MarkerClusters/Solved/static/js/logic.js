// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
var complaint = "&complaint_type=Rodent";
var limit = "&$limit=10000";



// Assemble API query URL
var url = baseURL + date + complaint + limit;
console.log(url);

// Grab the data with d3
d3.json(url).then(response => {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data

  response.map(d => {
    console.log(d);
    (d.location ? markers.addLayer(L.marker([d.location.coordinates[1], d.location.coordinates[0]]).bindPopup(d.descriptor)): false);
  })

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
