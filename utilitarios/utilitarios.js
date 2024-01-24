
mostrarImagen=function(idcomponete,rutaImagen){
    let componente;
    componente= document.getElementById(idcomponete);
    componente.src=rutaImagen;
}

mostraTExto= function(idcomponete, mensaje){
    let componente
    componente=document.getElementById(idcomponete);
    componente.innerText=mensaje;
}

mostraTExtoEnCaja= function(idcomponete, mensaje){
    let componente
    componente=document.getElementById(idcomponete);
    componente.value=mensaje;
}



recuperarTexto=function(idcomponete){
    let componente
    let valorIngresado
    componente=document.getElementById(idcomponete);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idcomponete){
    let valorCaja, valorEntero;
    // llamo a la funcion recuperarTexto que recupera en componente
    valorCaja=recuperarTexto(idcomponete);
    valorEntero=parseInt(valorCaja);
    return valorEntero
}


recuperarFloat=function(idcomponete){
    let valorCaja, valorFloat;
    // llamo a la funcion recuperarTexto que recupera en componente
    valorCaja=recuperarTexto(idcomponete);
    valorFloat=parseFloat(valorCaja);
    return valorFloat
}
