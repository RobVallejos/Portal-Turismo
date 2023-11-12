let lugaresDiv = document.getElementById("lugares-div");

let lugares = [
    {
        nombre: "Montaña Éter",
        descripcion: "Embárcate en una experiencia única en la montaña Éter, donde la naturaleza revela su esplendor en cada rincón. Con su silueta majestuosa y picos que se elevan hacia el cielo, esta montaña te invita a explorar su red de senderos serenos y descubrir la riqueza de su biodiversidad.",
        foto: "./img/montaña.png",
        atractivos: [
            {
                id: "l1a1",
                nombre: "Mirador del horizonte",
                resumen: "Mirador situado en la cima de la montaña",
                descripcion: "El Mirador del Horizonte ofrece una experiencia de contemplación serena, donde el aire fresco de las alturas y el silencio solo interrumpido por el susurro del viento crean un ambiente de calma. Bancos estratégicamente ubicados invitan a los visitantes a sumergirse en la paz del entorno, permitiéndoles absorber la magnificencia de la tierra desde esta perspectiva elevada.",
                foto: "./img/mirador.png"
            },
            {
                id: "l1a2",
                nombre: "Cabaña Aurora",
                resumen: "Cabaña para estadía y con vistas fascinantes",
                descripcion: "La Cabaña Aurora combina la calidez rústica con comodidades modernas. En su interior, encontrarás una acogedora sala de estar con una chimenea que crepita, ideal para las noches frescas de montaña. Grandes ventanales permiten que la luz natural inunde el espacio y te conecten con la belleza exterior en todo momento. La decoración, inspirada en la naturaleza circundante, crea una atmósfera tranquila y relajante.",
                foto: "./img/cabaña.png"
            }
        ]
    },
    {
        nombre: "Parque de diversiones Maravillandia",
        descripcion: "¡Bienvenido a Maravillandia, el parque de diversiones que despierta la imaginación y lleva la diversión al siguiente nivel! Sumérgete en un mundo de fantasía donde cada rincón ofrece emociones inigualables. Desde montañas rusas vertiginosas que desafían la gravedad hasta espectáculos en vivo que transportan a los visitantes a universos mágicos, Maravillandia es un festín para los sentidos.",
        foto: "./img/parque.png",
        atractivos: [
            {
                id: "l2a1",
                nombre: "Montaña rusa Vertiginosa",
                resumen: "Montaña rusa extrema para los que buscan adrenalina pura",
                descripcion: "Te presentamos a la Montaña Rusa Vertiginosa, una experiencia extrema que desafiará tus límites y elevará tu adrenalina a nuevas alturas. La Montaña Rusa Vertiginosa no es simplemente una atracción, es un viaje emocionante que te dejará con la sensación de haber conquistado lo imposible. ¡Prepárate para una experiencia extrema que elevará tu corazón y te hará rugir de emoción en cada giro y vuelta!",
                foto: "./img/montaña-rusa.png"
            },
            {
                id: "l2a2",
                nombre: "Vuelta al mundo",
                resumen: "Vuelta al mundo con vistas hermosas y luces radiantes",
                descripcion: "Deleitate dando una vuelta en la Vuelta al mundo Celestial, la joya radiante de nuestro parque de diversiones. Esta majestuosa noria se eleva con elegancia sobre el horizonte, ofreciendo a los visitantes una experiencia cautivadora y panorámica. Sus cabinas, adornadas con luces resplandecientes, invitan a los aventureros a embarcarse en un viaje tranquilo y fascinante hacia las alturas.",
                foto: "./img/vuelta-al-mundo.png"
            }
        ]
    }
]

function mostrarLugares() {
    let contenidoLugares = "";
    contenidoLugares += '<h1 id="lugares" class="text-center">Lugares de interes</h1>'
    for (let i = 0; i < lugares.length; i++) {
        contenidoLugares += "<div class='container-fluid border border-info'>"
            contenidoLugares += "<div class='row row-main'>"
                contenidoLugares += "<div class='col-3 border'>Nombre</div>"
                contenidoLugares += "<div class='col-9 border'>Descripción</div>"
            contenidoLugares += "</div>"
            contenidoLugares += "<div class='row'>"
                contenidoLugares += "<div class='col-3'>" + lugares[i].nombre + "</div>"
                contenidoLugares += "<div class='col-9'>" + lugares[i].descripcion + "</div>"
            contenidoLugares += "</div>"
            contenidoLugares += "<div class='row row-main'>"
                contenidoLugares += "<div class='col border text-center'>Foto</div>"
            contenidoLugares += "</div>"
            contenidoLugares += "<div class='row'>"
                contenidoLugares += "<div class='col-sm'><img src='" + lugares[i].foto + "' class='d-flex img-lugar'></div>"
            contenidoLugares += "</div>"
            
            contenidoLugares += "<div class='row'>"
                contenidoLugares += '<section aria-labelledby="atractivos">'
                    contenidoLugares += '<h2 id="atractivos" class="border rounded border-dark text-center bg-info">Atractivos</h2>'
                    contenidoLugares += '<p><a class="btn btn-primary w-100" data-bs-toggle="collapse" href="#lugar-' + i + '-atractivos-card" role="button" aria-expanded="false" aria-controls="lugar-' + i + '-atractivos-card">Ver atractivos de "' + lugares[i].nombre + '"</a></p>'
                    contenidoLugares += '<div class="collapse" id="lugar-' + i + '-atractivos-card">'
                        contenidoLugares += '<div class="card card-body" id="lugar-' + i + '-atractivos-div">'
                        for(let j = 0; j < lugares[i].atractivos.length; j++) {
                            contenidoLugares += "<div class='container-fluid border border-info'>"
                                contenidoLugares += "<div class='row row-main'>"
                                    contenidoLugares += "<div class='col-2 border'>Nombre</div>"
                                    contenidoLugares += "<div class='col-3 border'>Resumen</div>"
                                    contenidoLugares += "<div class='col-3 border'>Descripción</div>"
                                    contenidoLugares += "<div class='col-4 border'>Foto</div>"
                                contenidoLugares += "</div>"
                                contenidoLugares += "<div class='row'>"
                                    contenidoLugares += "<div class='col-2'>" + lugares[i].atractivos[j].nombre + "</div>"
                                    contenidoLugares += "<div class='col-3'>" + lugares[i].atractivos[j].resumen + "</div>"
                                    contenidoLugares += "<div class='col-3'>" + lugares[i].atractivos[j].descripcion + "</div>"
                                    contenidoLugares += "<div class='col-4'><img src='" + lugares[i].atractivos[j].foto + "' class='img-fluid img-atractivo'></div>"
                                contenidoLugares += "</div>"
                            contenidoLugares += "</div>"
                        }
                        contenidoLugares += '</div>'
                    contenidoLugares += '</div>'
                    
                contenidoLugares += '</section>'
            contenidoLugares += "</div>"
            
        contenidoLugares += "</div>"
        if(i != lugares.length - 1) {
            contenidoLugares += "<hr>"
        }
    }
    lugaresDiv.innerHTML += contenidoLugares;
}

mostrarLugares();