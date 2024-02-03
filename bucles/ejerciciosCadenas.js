ejecutar= function(){
    let mensaje;

    mensaje=recuperarTexto("txtCadena") ;

    recorrerCAdena(mensaje);
}

inveritr= function(){
    let mensaje;
    let invertido

    mensaje=recuperarTexto("txtCadena") ;

    invertido=invertirCadena(mensaje)

    mostrarTexto("lblInvertido", invertido)

}






recorrerCAdena= function(cadena){


    // cadena= juan

    let caracter;
    // for(let posicion=0; posicion<cadena.length;posicion++){

    //     caracter= cadena.charAt(posicion);

    //     console.log("el caracter es"+ caracter+ "en la posicion"+ posicion)

    // }
    //-------------------------------------- diferente forma----------------------------------------------------------

    for(let posicion=0;posicion<=cadena.length-1;posicion++){

        caracter= cadena.charAt(posicion);

        console.log("el caracter es   "+ caracter +" "+ "en la posicion"+ posicion)

    }
}

invertirCadena= function(cadena){  

    let letra;
    let resultado ="";

    for(let posicion= cadena.length-1; posicion>=0; posicion--){

        letra= cadena.charAt(posicion); // guarda la letra en la posicion

        resultado= resultado +letra

    }

    return resultado;


    


}

