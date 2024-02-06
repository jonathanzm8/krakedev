let notas= [];

agregarElementos= function(){
    notas.push(5)
    notas.push(10)

    console.log(notas.length)
}

recorrerArreglo= function(){
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {

        notaR= notas[indice]

        console.log(notaR)
        
        
    }
}

probarAgregar= function(){

    let notaIngresada;
    notaIngresada= recuperarInt("txtNota");
    agregarNota(notaIngresada);
}


agregarNota= function(nota){
    notas.push(nota);
    // console.log(nota)
}

/////// reto 41  calcular primedio ----------------------------------------------
calcularPromedio= function(){
    let sumarNotas= 0;
    let promedio
    for (let indice = 0; indice < notas.length; indice++) {
        sumarNotas = notas[indice]+ sumarNotas
        
    }

    promedio= sumarNotas/notas.length;

    return promedio
}

ejecutarPromedio=function(){
    let notaFinal

    notaFinal= calcularPromedio()

    mostrarTexto("lblResultado", notaFinal);

   



}