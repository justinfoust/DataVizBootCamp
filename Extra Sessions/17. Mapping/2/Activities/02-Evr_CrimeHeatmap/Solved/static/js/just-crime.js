var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";

d3.json(url).then(response => {

  console.log(response);

  response.map(d => L.marker([d.y, d.x]).addTo(myMap));

});
