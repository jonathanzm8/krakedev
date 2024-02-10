let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1109856432", nombre: "Jonathan", apellido: "Morocho", sueldo: 850.0 }
]


mostarEmpoleados = function () {
    let cmpTable, contenidoTabla, element;

    cmpTable = document.getElementById("tablaEmpleados")

    contenidoTabla = "<table> <tr>" +
        "<th>CEDULA</th>"+
        "<th>NOMBRE</th>"+
        "<th>APELLIDO</th>"+
        "<th>SUELDO</th>"+
        "</tr>"

    for(let i= 0; i< empleados.length; i++){
        element= empleados[i];
        contenidoTabla +=
        "<tr>"+
        "<td>"+ element.cedula +"</td>" +
        "<td>"+ element.nombre +"</td>" +
        "<td>"+ element.apellido +"</td>" +
        "<td>"+ element.sueldo +"</td>" +
        "</tr>"
    }

    contenidoTabla += "</table>"
    cmpTable.innerHTML = contenidoTabla;

}




mostraOpcionEmpleado = function () {

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    mostarEmpoleados();

}


mostraOpcioRol = function () {

    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");

}

mostraOpcionResumen = function () {

    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");

}