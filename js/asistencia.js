$(function(){
	let fechaHoy = $("#fechaHoy");
	let datosCentros = $("#datosCentros .row");
    let datosMoviles = $("#datosMoviles .row");
    
    var hoy = new Date();
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    fechaHoy.html(hoy.getDate() + " de " + meses[hoy.getMonth()] + " de " + hoy.getFullYear());

    cargarCentrosMoviles();
    mapearCentrosMoviles();

	function cargarCentrosMoviles(){
		var contenidoC = "";
        centros = posic.centros;
        for(var i=0; i < centros.length ; i++){
            contenidoC += "<div onclick='pickMarker(this);' id=" + centros[i].id + " class='card-asist col-4 text-center'>"
                contenidoC += "<div id='asist" + centros[i].id + "' class='card mb-3'>";
                    contenidoC += "<div class='card-header'><h6>"+ centros[i].nombre +"</h6></div>";
                    contenidoC += "<div class='card-body text-start'>";
                    contenidoC += "<p class='card-text'><b>Dirección</b><br>"+ centros[i].direccion +"</p>";
                        contenidoC += "<p class='card-text'><b>Horario</b><br>"+ centros[i].horario +"</h6>";
                    contenidoC += "</div>";
                contenidoC += "</div>";
            contenidoC += "</div>";
        }
        datosCentros.html(contenidoC);
		
        let contenidoM = "";
        moviles = posic.moviles;
        for(var i=0; i < moviles.length ; i++){
            contenidoM += "<div onclick='pickMarker(this);' id=" + moviles[i].id + " class='card-asist col-4 text-center'>"
                contenidoM += "<div id='asist" + moviles[i].id + "' class='card mb-3'>";
                    contenidoM += "<div class='card-header'><h6>Móvil "+ moviles[i].id +"</h6></div>";
                    contenidoM += "<div class='card-body text-start'>";
                    contenidoM += "<p class='card-text'><b>Ubicación</b><br>"+ moviles[i].ubicacion +"</p>";
                        contenidoM += "<p class='card-text'><b>Horario:</b><br>"+ moviles[i].horario +"</h6>";
                    contenidoM += "</div>";
                contenidoM += "</div>";
            contenidoM += "</div>";
        }
        datosMoviles.html(contenidoM);
	}

    //actualizarMapHeight();
});

function pickMarker(e){
    var id = e.id
    clickMarker(id);
    cambiarBackground(id);
}

function cambiarBackground(id){
    quitarBackground();
    var card =  $("#asist" + id)
    card.addClass("text-bg-warning");
}

function quitarBackground(){
    let c = posic.centros;
    for(var i=0; i < c.length ; i++){
        let cardC =  $("#asist" + c[i].id);
        cardC.removeClass("text-bg-warning");   
    }
    let m = posic.moviles;
    for(var i=0; i < m.length ; i++){
        let cardM =  $("#asist" + m[i].id);
        cardM.removeClass("text-bg-warning");
    }
}

function actualizarMapHeight(){
    let map = $("#mapAsistencia");
    let divTexto = document.getElementById("divTexto");
    map.css("height", divTexto.offsetHeight)
}

const posic = {
    "centros": [
        {
           "id": "c01",
           "nombre": "Centro San Roque",
           "direccion": "Avenida San Roque 2367",
           "coordenadas": [-32.35222936839675, -65.01254019232874],
           "horario": "Martes a Domingo de 15 a 23"
        },
        {
           "id": "c02",
           "nombre": "Centro Sagrada Familia",
           "direccion": "Calle de la Madera 80",
           "coordenadas": [-32.34083419270822, -64.99961576175582],
           "horario": "Lunes a Domingo de 8 a 14"
        },
        {
           "id": "c03",
           "nombre": "Centro Comuna 17",
           "direccion": "Av. San Martín 897",
           "coordenadas": [-32.36083419270852, -65.00961576175582],
           "horario": "Martes a Domingo de 10 a 18"
        },
        {
           "id": "c04",
           "nombre": "Centro Juventud Unida",
           "direccion": "Av. Mercau y Desaguadero",
           "coordenadas": [-32.36154080941434, -64.99818733364036],
           "horario": "Martes a Domingo de 10 a 18"
        }
    ],
    "moviles": [
        {
           "id": "01",
           "ubicacion": "Plaza Libertador Martin",
           "coordenadas": [-32.34267608174237, -65.01363475960103],
           "horario": "9 a 12"
        },
        {
           "id": "02",
           "ubicacion": "Universidad del Valle",
           "coordenadas": [-32.35501183705508, -64.99604684115651],
           "horario": "12 a 18"
        },
        {
           "id": "03",
           "ubicacion": "Centro Cultural 'Sarmiento'",
           "coordenadas": [-32.34776455297968, -64.9886115016464],
           "horario": "16 a 23"
        }
    ]
}

