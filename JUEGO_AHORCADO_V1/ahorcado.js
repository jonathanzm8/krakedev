//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = ""
let intentos;

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



        if ( posicion ==  0 ) {
            mostrarTexto("div0", letra)
        }
        if ( posicion ==  1 ) {
            mostrarTexto("div1", letra)
        }
        if ( posicion ==  2 ) {
            mostrarTexto("div2", letra)
        }
        if ( posicion ==  3 ) {
            mostrarTexto("div3", letra)
        }
        if ( posicion ==  4) {
            mostrarTexto("div4", letra)
        }
  


 }


    validar = function (letra) {
        let letrasEncontradas = 0;
        for (let i = 0; i < palabraSecreta.length; i++) {

            letrasIngresada = palabraSecreta.charAt(i)

            if (letra == letrasIngresada) {
               
                mostraLetra(letra,i)
                letrasEncontradas++;
            }

        }

    }


    ingresarLetra = function () {
        let letra
        letra = recuperarTexto("txtLetra")

        letra.toUpperCase()


        if (letra == letra.toUpperCase()) {
            validar(letra)

        } else {
            alert("solo se aceptan letras mayusculas")
        }


    }











    esMayuscula = function (caracter) {


        if (caracter > 64 && caracter < 91) { // entre 65 y 90

            return true;

        } else {

            return false;

        }

    }
