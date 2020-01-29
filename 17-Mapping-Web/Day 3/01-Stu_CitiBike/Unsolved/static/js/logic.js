var API_KEY = "pk.eyJ1IjoiamZvdXN0IiwiYSI6ImNrNW9veTVtazA0eHQza3FoZmI3b3gxNDgifQ.ecvXzuUG2FS0X3E5SoyAkw"

var stationURL = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"; 

var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;

//d3.json(stationURL, function(data) {
//    var locArr = data.data.stations.map(d => {
//        return [d.lat, d.lon];
//    });
//    
//    createMap(locArr);
//})


// Create the createMap function
function createMap(stations) {
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets-basic",
        accessToken: API_KEY
    });
    
    var baseMaps = {
        "Street Map": streetmap
    };
    
    var overlayMaps = {
        stations: stations
    };
    
    var myMap = L.map("map", {
        center: newYorkCoords,
        zoom: mapZoomLevel,
        layers: [streetmap, stations]
    });
    
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
}

function stationMarkers(response) {
    
    var stations = response.data.stations;
    
    var bikeMarkers = [];
    
    for (var index = 0; index < stations.length; index++) {
        var station = stations[index];
        
        var bikeMarker = L.marker([station.lat, station.lon])
        .bindPopup(`something`)
        
        bikeMarkers.push(bikeMarker);
    }
    
//    console.log(bikeMarkers)
    
    createMap(L.layerGroup(bikeMarkers));
}

d3.json(stationURL).then(stationMarkers);
// Create the tile layer that will be the background of our map


// Create a baseMaps object to hold the lightmap layer


// Create an overlayMaps object to hold the bikeStations layer


// Create the map object with options


// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map

// Create the createMarkers function

// Pull the "stations" property off of response.data

// Initialize an array to hold bike markers

// Loop through the stations array
// For each station, create a marker and bind a popup with the station's name

// Add the marker to the bikeMarkers array

// Create a layer group made from the bike markers array, pass it into the createMap function


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
