$(document).ready(function(){
 obtenerCategorias();
});

  function obtenerCategorias(){
    $.ajax({
        type: 'GET',
        data: { metodo : 'obtenerCategorias' },
        url: 'php/index.php',
        dataType: "json",
	success: renderListaCategorias
    });
  }

 function renderListaCategorias(data){
    $('#selCategorias option').remove();
    var list = data == null ? [] : (data.categorias instanceof Array ? data.categorias : [data.categorias ]);
    if (list.length < 1) {
       alert("SIN NINGÚN RESULTADO EN LA BD");
    } else {
        $('#selCategorias').append('<option value="0">SELECCIONAR...</option>');
        $.each(list, function(index, categoria) {
            $('#selCategorias').append('<option value='+categoria.idCategoria+'>'+categoria.descripcion+'</option>');
        });
        $('#selCategorias').focus();
    }
 }

 $('#selCategorias').change(function(){
   obtenerPistos($(this).val());
 });
  function obtenerPistos(idCategoria){
    $.ajax({
        type: 'GET',
        data: { metodo : 'obtenerPistos' , idCategoria : idCategoria },
        url: 'php/index.php',
        dataType: "json",
        success: rendeListaPistos
    });
  }

 function rendeListaPistos(data){
    $('#selPistos option').remove();
    var list = data == null ? [] : (data.pistos instanceof Array ? data.pistos : [data.pistos ]);
    if (list.length < 1) {
       alert("SIN NINGÚN RESULTADO EN LA BD");
    } else {
        $('#selPistos').append('<option value="0">SELECCIONAR...</option>');
        $.each(list, function(index, pisto) {
            $('#selPistos').append('<option value='+pisto.descripcion+'>'+pisto.descripcion+'</option>');
        });
        $('#selPistos').focus();
    }
 }

 $('#selPistos ').change(function(){
   alert("Seleccionaste: "+$(this).val());
 });