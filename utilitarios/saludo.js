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

    mostrarImagen("imgSaludo","./imagenes/saludo.gif")

    mostraTExtoEnCaja("txtNombre", " ")


}
