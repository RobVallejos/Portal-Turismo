let posic = {
    centros: [
        {
           id: "c01",
           nombre: "Centro San Roque",
           direccion: "Avenida San Roque 2367",
           coordenadas: [-32.35222936839675, -65.01254019232874],
           horario: "Martes a Domingo de 15 a 23"
        },
        {
           id: "c02",
           nombre: "Centro Sagrada Familia",
           direccion: "Calle de la Madera 80",
           coordenadas: [-32.34083419270822, -64.99961576175582],
           horario: "Lunes a Domingo de 8 a 14"
        }
    ],
    moviles: [
        {
           id: "m01",
           ubicacion: "Plaza Libertador Martin",
           coordenadas: [-32.34267608174237, -65.01363475960103],
           horario: "9 a 12"
        },
        {
           id: "m02",
           ubicacion: "Universidad del Valle",
           coordenadas: [-32.35501183705508, -64.99604684115651],
           horario: "12 a 18"
        },
        {
           id: "m03",
           ubicacion: "Rotonda de los Comechingones",
           coordenadas: [-32.35103465265302, -64.97316714828362],
           horario: "16 a 23"
        }
    ]
}

var map = L.map('map').setView([-32.346975285600216, -65.00391276013097], 14);

var centroIcon = L.icon({
    iconUrl: 'img/centroIcono.png',
    iconSize: [38, 38],
    iconAnchor: [22, 22],
    popupAnchor: [-3, -10]
});

var comercioIcon = L.icon({
    iconUrl: 'img/movilIcono.png',
    iconSize: [38, 45],
    iconAnchor: [22, 30],
    popupAnchor: [-3, -10]
});

posic.moviles.forEach(function(movil){
    L.marker(movil.coordenadas, {icon: comercioIcon}).addTo(map).bindPopup("<b>" + movil.ubicacion + "</b><br>Horario: " + movil.horario);
});

posic.centros.forEach(function(centro){
    L.marker(centro.coordenadas, {icon: centroIcon}).addTo(map).bindPopup("<b>" + centro.nombre + "</b><br>Horario: " + centro.horario);
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



