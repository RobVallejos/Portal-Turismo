var formulario = document.getElementById("aviso-agregar");


formulario.addEventListener('click', function (event) {
    event.preventDefault();
  

  
    var nombreAviso = document.getElementById("buscadorPrecios").value;
    var descripcionAviso = document.getElementById("descripcion-aviso").value;
    var infoAviso = document.getElementById("aviso-info").value;
    var opcionAviso = document.getElementById("opcion-aviso").value;
    var precioAviso = document.getElementById("aviso-precio").value;
    var imgAviso1 = document.getElementById("aviso-img").value;
  
  
  
    if (nombreAviso == "" || descripcionAviso == "" || descripcionAviso == "" || infoAviso == ""
      || imgAviso1 == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `El formulario esta incompleto`
      })
    } else {
      Swal.fire({
        
    // Image: './Images/fondo.jpg',
    title: 'PERFECTO! Aviso generado Correctamente',
        
      text: `
      Datos de su aviso: 
      Tipo de aviso: ${opcionAviso} \n
      nombre: ${nombreAviso} \n
      descripcion: ${descripcionAviso} \n
      precio: ${precioAviso} \n
      Restricciones/características: ${infoAviso} \n
      Img: Imagens guardadas.
      `
    });}
  
  
  })