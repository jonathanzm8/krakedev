//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = ""
let intentos = 0;
let coincidencias = 0;

let errores = 0;

guardarPalabra = function () {

    let input = document.getElementById("txtSecreta");
    let palabra = input.value;

    if (palabra.length === 5 && palabra === palabra.toUpperCase()) { //  toUpperCase() convierto un string a mayuscula

        palabraSecreta = palabra;
        console.log(palabraSecreta)
    } else {
        alert("ingrese una palabra de 5 caracteres y mayusculas")


    }



}


mostraLetra = function (letra, posicion) {



    if (posicion == 0) {
        mostrarTexto("div0", letra)
    }
    if (posicion == 1) {
        mostrarTexto("div1", letra)
    }
    if (posicion == 2) {
        mostrarTexto("div2", letra)
    }
    if (posicion == 3) {
        mostrarTexto("div3", letra)
    }
    if (posicion == 4) {
        mostrarTexto("div4", letra)
    }



}


validar = function (letra) {
    let letrasEncontradas = 0;
    let coinciden = coincidencias;

    for (let i = 0; i < palabraSecreta.length; i++) {


        letrasPosicion = palabraSecreta.charAt(i)

        if (letra == letrasPosicion) {
            coincidencias++;

            mostraLetra(letra, i)
            letrasEncontradas++;
        }

        console.log(coinciden)

    }



    if (coinciden == coincidencias) {
        errores++;
        mostrarAhorcado();

        alert("LA LETRA NO ES PARTE DE LA PALABRA")


    }





}


ingresarLetra = function () {
    let letra
    letra = recuperarTexto("txtLetra")

    letra.toUpperCase()
    intentos++;



    if (letra == letra.toUpperCase()) {


        validar(letra)
        if (coincidencias == 5) {
            // alert("HA GANADO")
            mostrarImagen("ahorcadoImagen", "ganador.gif")

        }
        if (intentos == 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif")


            alert("HA PERDIDO")

        }


    } else {
        alert("solo se aceptan letras mayusculas")



    }


}



mostrarAhorcado = function () {
    console.log(errores)
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png")
    }
    if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png")
    }
    if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png")
    }
    if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png")
    }
    if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png")
    }
    if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png")
    }
    if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png")
    }
    if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png")
    }
    if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png")
    }

}











esMayuscula = function (caracter) {


    if (caracter > 64 && caracter < 91) { // entre 65 y 90

        return true;

    } else {

        return false;

    }

}
