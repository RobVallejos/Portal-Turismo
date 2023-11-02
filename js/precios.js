	$(function(){
	let cuerpoModal = $('#resultadoPrecios .modal-body .container-fluid .row');
	let buscadorPrecios = $('#buscadorPrecios');
	let btnPrecios = $("#btnPrecios");

	// Disparo evento precios sugeridos
	btnPrecios.click(function(){
		traerPrecios()
		.then(extraerResultados)
		.then(listarSugeridos);
	});

	// Disparo evento al presionar enter en el input también
	buscadorPrecios.keypress(function (e) {
	 var key = e.which;
	 if(key == 13)  // the enter key code
	  {
	    $('#btnPrecios').click();
	    return false;  
	  }
	});   

	// Vacío modal-body cuando cierro el modal
	$("#closeModal").click(function(){
		cuerpoModal.html("");
	});

	var traerPrecios = function(){
		let criterio = $.trim(buscadorPrecios.val());
		return $.ajax({
			url: "https://api.mercadolibre.com/sites/MLA/search?q=" + criterio,
			type: "get"
		});
	}

	var filterResponse = function(attr, response){
		console.log(response[attr]);
		return response[attr];
	}

	var extraerResultados = function(response){
		return filterResponse('results', response);
	}

	var listarSugeridos = function(results){
		let generic = "No se encontraron resultados con ese criterio."
		let contenido = "";
		if(results.length > 0){
			for(var i=0; i < 15 ; i++){
				contenido += "<div class='col-4 text-center'>"
					contenido += "<div class='card border-info mb-3' style='height: 320px;'>";
						contenido += "<div class='card-header'><h5>$ "+ results[i].price +"</h5></div>";
						contenido += "<div class='card-body'>";
							contenido += "<img src='"+ results[i].thumbnail +"' style='width: 100px; height: 100px;' class='img-fluid rounded-start' alt=''>";
							contenido += "<h6 class='card-text'>"+ results[i].title +"</h6>";
						contenido += "</div>";
						contenido += "<div class='card-footer' style='border-top: 0; background-color: white;''>";
							contenido += "<a href='#'' class='btn btn-info'>Seleccionar</a>";
						contenido += "</div>";
					contenido += "</div>";
				contenido += "</div>";
			}
			cuerpoModal.html(contenido);
		}else{
			cuerpoModal.html(generic);
		}
	}
});

