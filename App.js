var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25rbGltZWsiLCJhIjoiY2s2Ymx1bW5vMGN1bjNub3ZmZjd2OWIxbSJ9.8lEjhyrP3VNrNwem_cP7xg';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});