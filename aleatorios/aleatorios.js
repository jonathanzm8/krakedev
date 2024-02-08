
let aleatorio = [];

numerosAleatorios= function () {
    let aleatorio, aleatorioMultiplicado, alatorioEntero;

    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 100;

    alatorioEntero = parseInt(aleatorioMultiplicado);

    // console.log(alatorioEntero)

    return alatorioEntero;

}


generarAleatorio = function () {
    let numeros;
    let numero
    let generar;

    numero = recuperarInt("numero")

    if (numero >= 5 && numero <= 20) {
        for (let indice = 0; indice < numero; indice++) {
            numeros = indice
            // console.log(numeros)
            generar=numerosAleatorios()
            // console.log(generar)

            aleatorio.push(generar)
        }
        
        mostarResultados(generar)
    }
}


mostarResultados = function (arregloNumeros) {

    let cmpTabla = document.getElementById("divResultado");
    let contenidoTabla = "<table>";



    for (let indice = 0; indice < aleatorio.length; indice++) {
        arregloNumeros = aleatorio[indice];

        contenidoTabla += "<tr><td>";
        contenidoTabla += arregloNumeros;
        contenidoTabla += "</tr></td>";

    }

    contenidoTabla += "</table";
    cmpTabla.innerHTML = contenidoTabla


}

