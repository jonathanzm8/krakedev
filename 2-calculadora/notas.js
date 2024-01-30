calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) { // isNaN es para validar cuando no ingresa un valor correcto (en este caso un numero)
        alert("ERROR")

    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("EROR")
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("EROR")
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);

            }
        }
    }

}

// OTRA FORMA DE REALIZAR 

calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;

    let error = false;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "Ingrese un numero")
        error = true;
    } else {
        mostrarTexto("lblError1", "")


    }

    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "Ingrese un numero")

        error = true;
    } else {
        mostrarTexto("lblError2", "")


    }


    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "Ingrese un numero")

        error = true;
    } else {
        mostrarTexto("lblError3", "")


    }

    if (error == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);


    }

    // otra forma de realizar -----------------------------------------------

}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;

    let error = false;
    nota1 = recuperarFloat("txtNota1");


    nota2 = recuperarFloat("txtNota2");


    nota3 = recuperarFloat("txtNota3");


    if (esNotaValida(nota1, "lblError1") && esNotaValida(nota2, "lblError2") && esNotaValida(nota3, "lblError3")) {

        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);



    } else {
        mostrarTexto("lblResultado", "");
    }


}


esNotaValida = function (nota, idComponenteError) {
    let hayErrores= false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "Ingrese un numero")
        hayErrores=true;
        

    } 

    if (nota < 0 || nota >10) {
        mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 10")
        hayErrores=true
        
    }

    if(hayErrores==false){
        mostrarTexto(idComponenteError, "")
        

    }
    lblTotal
    
    

}
