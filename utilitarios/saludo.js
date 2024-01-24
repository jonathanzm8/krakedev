saludar= function(){
    let nombre, apellido;
    // recupero el texto llammado a la funcion recuperarTexto

    nombre= recuperarTexto("txtNombre");
    apellido= recuperarTexto("txtApellido");
}


recuperarTexto=function(idcomponete){
    let componente
    let valorIngresado
    componente=document.getElementById(idcomponete);
    valorIngresado=componente.value;
    return valorIngresado;
}