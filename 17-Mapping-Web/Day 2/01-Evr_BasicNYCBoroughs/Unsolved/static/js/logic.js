var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
}).addTo(map);

var link = "static/data/nyc.geojson";

var mapStyle = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.5,
    weight: 1.5
};

function chooseColor(borough) {
    switch(borough) {
        case "Brooklyn":
            return "yellow";
        case "Bronx":
            return "red";
        case "Manhattan":
            return "orange";
        case "Queens":
            return "green";
        case "Staten Island":
            return "purple";
        default:
            return "black";
    };
}

//d3.json(link).then(d => L.geoJSON(d, {style: mapStyle}).addTo(map));

d3.json(link).then(d => {
    
    L.geoJSON(d, {
        
        style: f => ({
            color: "white",
            fillColor: chooseColor(f.properties.borough),
            fillOpacity: 0.5,
            weight: 1.5
        }),
        
        onEachFeature: (feature, layer) => {
            
            layer.on({
                
                mouseover: e => {
                    layer = e.target
                    layer.setStyle({
                        fillOpacity: 0.2
                    })
                },
                
                mouseout: e => {
                    layer = e.target
                    layer.setStyle({
                        fillOpacity: 0.5
                    })
                },
                
                click: e => {
                    map.fitBounds(e.target.getBounds());
                }
                
            });
            
            layer.bindPopup(`<h1>${feature.properties.neighborhood}</h1><hr><h2>${feature.properties.borough}</h2>`)
            
        }
        
    }).addTo(map)
    
});

