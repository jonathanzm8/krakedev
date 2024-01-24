saludar= function(){
    let nombre, apellido;
    let edad, estatura;
    let mensaje
    // recupero el texto llammado a la funcion recuperarTexto

    nombre= recuperarTexto("txtNombre");
    apellido= recuperarTexto("txtApellido");
    edad= recuperarInt("txtEdad");
    estatura= recuperarFloat("txtEstatura");

    mensaje= "BIENVENIDO:"+" "+ nombre +" "+ apellido;

    mostraTExto("lblResultado", mensaje)


}


mostraTExto= function(idcomponete, mensaje){
    let componente
    componente=document.getElementById(idcomponete);
    componente.innerText=mensaje;
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
