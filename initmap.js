// New map with viewpoint over rub
var mapid = L.map('mapid').setView([51.4456659, 7.2594206], 16);

// Use the tiles from https://www.openstreetmap.de/karte.html
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    'useCache': true
}).addTo(mapid);

// Show mousecoordinates
L.control.mousePosition().addTo(mapid);

var markerlist = {};
// Load Colored Markers
var blueIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-blue.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['blue'] = blueIcon;

var goldIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-gold.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['gold'] = goldIcon;

var redIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-red.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['red'] = redIcon;

var greenIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-green.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['green'] = greenIcon;

var orangeIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-orange.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['orange'] = orangeIcon;

var yellowIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-yellow.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['yellow'] = yellowIcon;

var violetIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-violet.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['violet'] = violetIcon;

var greyIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-grey.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['grey'] = greyIcon;

var blackIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-black.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['black'] = blackIcon;

var greenIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-green.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
markerlist['green'] = greenIcon;

for (var i in markers) {
    // Position
    var latlng = L.latLng({ lat: markers[i].latitud, lng: markers[i].longitud });
    // Adding it with the given marker color
    var m = L.marker(latlng, {icon: markerlist[markers[i].icon]}).addTo(mapid);
    // Name in bold and description/html underneath that
    m.bindPopup('<b><p>' + markers[i].name + '</p></b><p>' + markers[i].description + '</p>');
}
