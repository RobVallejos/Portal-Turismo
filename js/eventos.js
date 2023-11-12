let obrasDiv = document.getElementById("obras-div");
let cinesDiv = document.getElementById("cines-div");

let eventos = {
    obras: [
        {
            id: "o1",
            informacion: "En la cima de la montaña Éter, un escenario único se despliega: un espectáculo cautivador presentado por artistas ambulantes que fusionan su creatividad con la majestuosidad natural que los rodea. En este teatro al aire libre, acróbatas intrépidos danzan en armonía con el viento que acaricia las alturas, mientras malabaristas expertos desafían la gravedad con destreza impresionante.",
            lugar: "Montaña Éter",
            fecha: "20/11/23",
            estado: "Vigente"
        },
        {
            id: "o2",
            informacion: "Bienvenido al Rincón Artístico del Parque, donde artistas ambulantes convergen para crear un festival efervescente de creatividad y expresión. Este vibrante espacio se llena de colores, música y talento, convirtiéndose en el alma palpitante del parque. Malabaristas hábiles danzan con sus elementos en el aire, artistas callejeros pintan lienzos vivos en el suelo, y músicos talentosos llenan el ambiente con melodías que transforman el espacio en un escenario efímero de magia.",
            lugar: "Parque",
            fecha: "21/11/23",
            estado: "Vigente"
        }
    ],
    cines: [
        {
            id: "c1",
            informacion: "Bienvenido al Cine Flotante, una experiencia cinematográfica única que se despliega en las pintorescas orillas del río Carmelo. Este cine ambulante, anclado suavemente en la ribera, ofrece a los espectadores la oportunidad de sumergirse en películas bajo el manto estrellado y la suave brisa del río.",
            lugar: "Río Carmelo",
            fecha: "12/12/23",
            estado: "Vigente"
        },
        {
            id: "c2",
            informacion: "El Cine Urbano Rodante, una experiencia cinematográfica que transforma el corazón de la ciudad en un escenario vibrante de luces y emociones, despliega su pantalla al caer la noche, iluminando la plaza central con una luz tenue que invita a los transeúntes a sumergirse en la magia del cine. ",
            lugar: "Centro",
            fecha: "14/12/23",
            estado: "Vigente"
        }
    ]
}

function agregarInformacion(div, array) {
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        contenido += "<div class='container-fluid border'>"
            contenido += "<div class='row row-main'>"
                contenido += "<div class='col border'>Informacion</div>"
            contenido += "</div>"
            contenido += "<div class='row'>"
                contenido += "<div class='col'>" + array[i].informacion + "</div>"
                contenido += "</div>"   
            contenido += "<div class='row row-main'>"
                contenido += "<div class='col border'>Lugar</div>"
                contenido += "<div class='col border'>Fecha</div>"
                contenido += "<div class='col border'>Estado</div>"
            contenido += "</div>"
            contenido += "<div class='row'>"
                contenido += "<div class='col'>" + array[i].lugar + "</div>"
                contenido += "<div class='col'>" + array[i].fecha + "</div>"
                contenido += "<div class='col'>" + array[i].estado + "</div>"
            contenido += "</div>"
        contenido += "</div>"
        if(i != array.length - 1) {
            contenido += "<hr>"
        }
    }
    div.innerHTML += contenido;
}

agregarInformacion(obrasDiv, eventos.obras);
agregarInformacion(cinesDiv, eventos.cines);