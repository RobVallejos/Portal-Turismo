var map = L.map('mapAsistencia').setView([-32.343402222908836, -64.99777926105719], 13.5);
function mapearCentrosMoviles(){
    var centroIcon = L.icon({
        iconUrl: 'img/centroIcono.png',
        iconSize: [38, 38],
        iconAnchor: [22, 22],
        popupAnchor: [-3, -10]
    });
    
    var movilIcon = L.icon({
        iconUrl: 'img/movilIcono.png',
        iconSize: [38, 45],
        iconAnchor: [22, 30],
        popupAnchor: [-3, -10]
    });
    
    posic.moviles.forEach(function(movil){
        L.marker(movil.coordenadas, {icon: movilIcon}).addTo(map).bindPopup("<div id='"+movil.id+"' onclick='selectDivExterno(this)'><b>" + movil.ubicacion + "</b><br>Horario: " + movil.horario +"</div>");
    });
    
    posic.centros.forEach(function(centro){
        L.marker(centro.coordenadas, {icon: centroIcon}).addTo(map).bindPopup("<div id='"+centro.id+"' onclick='selectDivExterno(this)'><b>" + centro.nombre + "</b><br>Dirección: " + centro.direccion +"<br>Horario: " + centro.horario +"</div>");
    });
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function selectDivExterno(e){
    cambiarBackground(e.id);
}


