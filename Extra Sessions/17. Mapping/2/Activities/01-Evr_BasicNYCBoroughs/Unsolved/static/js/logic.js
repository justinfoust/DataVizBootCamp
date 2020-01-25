// Combined files into one in class activity 
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
});

L.tileLayer("https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

var link = "static/data/nyc.geojson";

// var mapStyle = {
//     color: "white",
//     fillColor: "pink",
//     fillOpacity: 0.5,
//     weight: 1.5
// };

function chooseColor(b) {
    switch(b) {
        case "Brooklyn":
            return "yellow";
        case "Bronx":
            return "red";
        case "Manhattan":
            return "orange";
        case "Queenx":
            return "green";
        case "Staten Island":
            return "purple";
        default:
            return "black";
    }

}

d3.json(link).then(d => {
    L.geoJson(d, {
    style: f => ({
          color: "white",
          fillColor: chooseColor(f.properties.borough),
          fillOpacity: 0.5,
          weight: 1.5
    }),
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                // console.log(e);
                layer = e.target
                layer.setStyle({
                    fillOpacity: 0.9
                });
            },
            mouseout: e => {
                layer = e.target
                layer.setStyle({
                    fillOpacity: 0.5
                });
            },
            click: e => {
                // console.log(e.target.getBounds());
                map.fitBounds(e.target.getBounds());
            }
        });

        layer.bindPopup(`<h1> ${feature.properties.neighborhood}</h1><hr><h2>${feature.properties.borough}</h2>`)

    }
    }).addTo(map)
});
