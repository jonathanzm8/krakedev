let puntoUsuario = 0;
let puntoComputador = 0;



jugar = function (selecionado) {
    let lanzar, ganador;
    

    lanzar = generarElemento();

    ruta = generarRuta(lanzar);

    mostrarImagen("Imagen", ruta);



    ganador = determinarGanador(lanzar, selecionado);

    if (ganador == 1) {
        puntos= puntoUsuario +=1;
        mostrarTexto("LblpuntajeUsuario", puntos)
        mostrarTexto("lblResultado", "GASNASTE LA PARTIDA")
       


     } else if (ganador == 2) {
        puntos = puntoComputador += 1;
        mostrarTexto("LblpuntajeComputador", puntos)
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA")

       
        
    

    }else if (ganador == 0) {
        mostrarTexto("lblResultado", "EMPATE")
    



    }



}

limpiar= function(){
    mostrarTexto("lblResultado", "")
    mostrarTexto("LblpuntajeUsuario", "")
    mostrarTexto("LblpuntajeComputador", "")
}




