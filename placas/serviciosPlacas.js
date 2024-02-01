validarEstructura = function (placa) {    

    valido= true

    if(placa.length==7 || placa.length==8){
        validarMayuscula= esMayuscula(placa.charCodeAt(0));

        
        if(esMayuscula(placa.charCodeAt(0))){
            if(esMayuscula(placa.charCodeAt(1))){
                if (esMayuscula(placa.charCodeAt(2))) {
                    if(esGuion(placa.charCodeAt(3))){
                        if(esDigito(placa.charCodeAt(4))){
                            if(esDigito(placa.charCodeAt(5))){
                                if (esDigito(placa.charCodeAt(6))) {

                                    if(valido== true){
                                        mostrarTexto("lblError","placa correcta")

                                    }
                                   
                                    // if(esDigito(placa.charCodeAt(7))){

                                    // }else{
                                    //     mostrarTexto("lblError","octavo caracter caracter no es un digito")

                                    // }
                                    
                                }else{
                                    mostrarTexto("lblError","septimo caracter no es un digito")

                                }

                            }else{
                                mostrarTexto("lblError","sexto caracter no es un digito")

                                
                            }

                        }else{
                            mostrarTexto("lblError","quinto caracter no es un digito")

                        }
                        

                    }else{
                        mostrarTexto("lblError","cuarto caracter no es un guion")
                    }

                    
                }else{
                    mostrarTexto("lblError","tercer caracter no es una mayuscula")

                }    

            }else{
                mostrarTexto("lblError","segundo caracter no es una mayuscula")

            }
            
        }else{
            mostrarTexto("lblError","primer caracter no es una mayuscula")
        }

    }else{
        mostrarTexto("lblError", "la placa debe tener 7 u 8 caracteres")
    }
   
  

}





obtenerProvincia = function (placa) {

    let valida = !null;
    if (placa.charAt(0) == "A") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de AZUAY");
    } else if (placa.charAt(0) == "B") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de BOLIVAR");
    } else if (placa.charAt(0) == "U") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de CAÑAR");


    } else if (placa.charAt(0) == "C") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de CARCHI");
    } else if (placa.charAt(0) == "X") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de COTOPAXI");
    } else if (placa.charAt(0) == "H") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de CHIMBORAZO");
    } else if (placa.charAt(0) == "O") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de EL ORO");
    } else if (placa.charAt(0) == "E") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de ESMERALDAS");
    } else if (placa.charAt(0) == "W") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de GALAPAGOS");
    } else if (placa.charAt(0) == "G") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de GUAYAS");
    } else if (placa.charAt(0) == "I") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de IMBABURA");
    } else if (placa.charAt(0) == "L") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de LOJA");
    } else if (placa.charAt(0) == "R") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de LOS RIOS");
    } else if (placa.charAt(0) == "M") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de MANABI");
    } else if (placa.charAt(0) == "V") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de MORONA SANTIAGO");
    } else if (placa.charAt(0) == "S") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de PASTAZA");
    } else if (placa.charAt(0) == "P") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de PICHINCHA");
    } else if (placa.charAt(0) == "K") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de SUCUMBIOS");
    }
    else if (placa.charAt(0) == "Q") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de ORELLANA");
    } else if (placa.charAt(0) == "T") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de TUMGURAHUA");
    } else if (placa.charAt(0) == "Z") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de ZAMORA CHINCHIPE");
    } else if (placa.charAt(0) == "Y") {
        mostrarTexto("lblProvincia", "Pertenece a la provincia de SANTA ELENA");
    }else{
        mostrarTexto("lblProvincia", "Provincia incorrecta");


    }

}



obtenerTipoVehiculo = function (placa) {

    if (placa.charAt(1) == "A" || placa.charAt(1) == "Z") {

        mostrarTexto("lblTipoVehiculo", "vehiculo Comercial");
    } else if (placa.charAt(1) == "E") {
        mostrarTexto("lblTipoVehiculo", "VEHICULO GUBERNAMENTAL");


    } else if (placa.charAt(1) == "X") {
        mostrarTexto("lblTipoVehiculo", "VEHICULO DE USO OFICIAL");

    } else if (placa.charAt(1) == "S") {
        mostrarTexto("lblTipoVehiculo", "VEHICULO DEL GOBIERNO PROVINCIAL");

    } else if (placa.charAt(1) == "M") {
        mostrarTexto("lblTipoVehiculo", "VEHICULOS MUNICIPALES");

    } else {
        mostrarTexto("lblTipoVehiculo", "VEHICULOS PARTICULAR");


    }


}

obtenerPicoYplaca = function (placa) {
    ultimaPosicion = placa.length - 1;

    if (placa.charAt(ultimaPosicion) == 1 || placa.charAt(ultimaPosicion) == 2) {
        mostrarTexto("lblPico", "lunes")
    } else if (placa.charAt(ultimaPosicion) == 3 || placa.charAt(ultimaPosicion) == 4) {
        mostrarTexto("lblPico", "martes")

    } else if (placa.charAt(ultimaPosicion) == 5 || placa.charAt(ultimaPosicion) == 6) {
        mostrarTexto("lblPico", "miercoles")

    } else if (placa.charAt(ultimaPosicion) == 7 || placa.charAt(ultimaPosicion) == 8) {
        mostrarTexto("lblPico", "jueves")

    } else if (placa.charAt(ultimaPosicion) == 9 || placa.charAt(ultimaPosicion) == 0) {
        mostrarTexto("lblPico", "viernes")

    }




}

limpiar=function(){

    mostrarTextoEnCaja("txtPlaca","")
    mostrarTexto("lblError","")
    mostrarTexto("lblProvincia","")
    mostrarTexto("lblTipoVehiculo","")
    mostrarTexto("lblPico","")
  


}
