ejecutarValidacion = function () {

    let password;

    password = recuperarTexto("txtPassword")

    validarPassword(password);




}




validarPassword = function (password) {

    if (password.length >= 8 && password.length <= 16) {
        valido= false


        let letra;


        for (let posicion = 0; posicion < password.length; posicion++) {

            letra = password.charAt(posicion)

            if (esMayuscula(letra.charCodeAt(posicion))) { 
            

                return true;
        
            } else if(esDigito(letra)){

                return true;
                
        
            }else if (esCaracterEspecial(letra)) {
                return true;



            }
          
        }

        return valido

    } else {
        console.log("debetern minimos 8 caracteres y maximo 16 caracteres")
    }

}









//---------------------------------- validaciones de Mayuscula digito y caracter especial -------------------------



esMayuscula = function (caracter) {


    if (caracter > 64 && caracter < 91) { // entre 65 y 90

        return true;

    } else {

        return false;

    }

}

esDigito = function (caracter) {


    if (caracter >= 48 && caracter <= 57) { // entre 48 y 57
        return true;


    } else {
        return false;

    }

}
esCaracterEspecial = function (caracter) {

    if (caracter == 45) {  // GUION
        return true;


    } else if (caracter == 42) {  // ASTERISCO
        return true;


    } else if (caracter == 95) { // GUION BAJO
        return true;


    }



}


// if(esMayuscula(letra)){
//     console.log("es mayuscula")
    
    
// }else if (esDigito(letra)) {
//     console.log("es digito")

    
// }else if(esCaracterEspecial(letra)){
//     console.log("es caracter especial")



// }

