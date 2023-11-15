let map = L.map('mapAsistencia').setView([-32.35083723969374, -64.99666773495707], 13.5);
let markers = [];
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
        var marker = L.marker(movil.coordenadas, {icon: movilIcon}).addTo(map).bindPopup("<div id='"+movil.id+"' onclick='selectDivExterno(this)'><b>" + movil.ubicacion + "</b><br>Horario: " + movil.horario +"</div>");
        var id = movil.id;
        markers.push({marker, id});
    });
    
    posic.centros.forEach(function(centro){
        var marker = L.marker(centro.coordenadas, {icon: centroIcon}).addTo(map).bindPopup("<div id='"+centro.id+"' onclick='selectDivExterno(this)'><b>" + centro.nombre + "</b><br>Dirección: " + centro.direccion +"<br>Horario: " + centro.horario +"</div>");
        var id = centro.id;
        markers.push({marker, id});
    });
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    clickMarker();
}

function selectDivExterno(e){
    cambiarBackground(e.id);
}

function clickMarker(id){

    markers.forEach(marker => {
        if(marker.id == id){
            marker.marker.fire('click');
        }
    })

}
