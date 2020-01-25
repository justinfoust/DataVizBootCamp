var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 11
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

var link = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=2000";

//d3.json(link).then(d => {
//    console.log(d);
//    
//    d.map(f => {
//        L.marker([f.location.coordinates[1], f.location.coordinates[0]]).addTo(myMap)
//    });
//    
//});

d3.json(link).then(response => {
    
    var heatArray = response.map(d => [d.y, d.x]);
    
    var heat = L.heatLayer(heatArray, {
        radius: 50,
        blur: 35
    }).addTo(myMap);
    
});