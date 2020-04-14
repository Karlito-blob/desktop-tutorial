var paris = [48.8534, 2.3488]

//création de la map
var map = L.map('map').setView(paris, 6);

//création du calque image
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20
}).addTo(map);

//ajout d'un marqueur
var marker = L.marker(paris).addTo(map);

//ajout d'un popup$
marker.bindPopup('<h3> Paris, France. </h3>');