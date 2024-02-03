ejecutarValidacion = function () {

    let password;

    password = recuperarTexto("txtPassword")

    validado=validarPassword(password,);
    mostrarTexto("lblResultado",validado)




}


validarPassword = function (password) {
    let mensajeError = ""
    let letraPosicion

    let letraMayuscula= false;
    let digito= false;

    let caracterEspecial= false;
    if (password.length >= 8 && password.length <= 16) {

    }else{
        mensajeError = "la contraseña debe tener como nimimo 8 y maximo 16 caracteres "
    }

    for(let posicion= 0; posicion< password.length; posicion++){
        letraPosicion= password.charCodeAt(posicion)
        esMayuscula(letraPosicion)
        if(esMayuscula(letraPosicion)){
        
            letraMayuscula= true
        }
    }

    for(let posicion= 0; posicion< password.length; posicion++){
        letraPosicion= password.charCodeAt(posicion)
        esDigito(letraPosicion)
        if(esDigito(letraPosicion)){
            digito= true
        }
    }

    for(let posicion= 0; posicion< password.length; posicion++){
        letraPosicion= password.charCodeAt(posicion)
        esCaracterEspecial(letraPosicion)
        if(esCaracterEspecial(letraPosicion)){
            caracterEspecial= true
        }
    }

  
    if(!letraMayuscula){
        mensajeError += "de tener al menos una letra mayuscula"

    }else if(!digito){
        mensajeError += "de tener un digito"

    }else if(!caracterEspecial){
        mensajeError += "de tener un caracter especial (*, -, _ )"

    }

    return mensajeError

    
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

