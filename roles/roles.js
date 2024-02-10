let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1109856432", nombre: "Jonathan", apellido: "Morocho", sueldo: 850.0 }
]

let esNuevo = false


mostarEmpoleados = function () {
    let cmpTable, contenidoTabla, element;

    cmpTable = document.getElementById("tablaEmpleados")

    contenidoTabla = "<table> <tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>"

    for (let i = 0; i < empleados.length; i++) {
        element = empleados[i];
        contenidoTabla +=

            "<tr>" +
            "<td>" + element.cedula + "</td>" +
            "<td>" + element.nombre + "</td>" +
            "<td>" + element.apellido + "</td>" +
            "<td>" + element.sueldo + "</td>" +
            "</tr>"
    }


    contenidoTabla += "</table>"
    cmpTable.innerHTML = contenidoTabla;

}

ejecutarNuevo = function () {
    mostrarComponente("txtCedula");
    mostrarComponente("txtNombre");
    mostrarComponente("txtApellido");
    mostrarComponente("txtSueldo");
    mostrarComponente("btnGuardar");
    esNuevo = true;

}

//7 crear emplelado------------------------------------------

buscarEmpleado = function (cedula) {
    let busqueda
    let clienteEncontado = null;
    for (let i = 0; i < empleados.length; i++) {
        busqueda = empleados[i];
        if (busqueda.cedula == cedula) {

            clienteEncontado = busqueda
            break

        }

    }
    return clienteEncontado;
}


agregarEmpleado = function (empleado) {
    let resultadoBusqueda;

    resultadoBusqueda = buscarEmpleado(empleado.cedula)

    if (resultadoBusqueda == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }

}

guardar = function () {

    let cedula,nombre, apellido,  sueldo;

    cedula = recuperarTexto("txtCedula");
    nombre = recuperarTexto("txtNombre");
    apellido = recuperarTexto("txtApellido");
    sueldo = recuperarFloat("txtSueldo");

    if(validarCedula(cedula,"lblErrorCedula") && validarNombre(nombre,"lblErrorNombre") && validarApellido(apellido,"lblErrorApellido")&& validarSueldo(sueldo,"lblErrorSueldo")){
        
        if(esNuevo== true){
            let empleado= [];
            let agregado;

            empleado.cedula= cedula;
            empleado.nombre= nombre;
            empleado.apellido= apellido;
            empleado.sueldo= sueldo;

            agregado=agregarEmpleado(empleado);

            if(agregado== true){
                alert=("cliente agredado exitosamente")
                mostarEmpoleados();
            }else{
                alert("ya existe el empleado con la cedula " + empleado.cedula)
    
            }
    

        }

        deshabilitarCampos();

    


    }


}




validarCedula = function (cedula, idComponenteError) {

    let error = false;

    if (cedula == "" ) {

        mostrarTexto(idComponenteError, "campo Obligatorio ")
        
        error = true;

    }

    if (cedula.length < 10 || cedula.length>10) {

        mostrarTexto(idComponenteError, "ingrese 10 caracteres ")
        
        error = true;

    }

    if (isNaN(cedula)) {

        mostrarTexto(idComponenteError, "ingrese digitos ")
        error = true;


    }

    if (error==false) {
        mostrarTexto(idComponenteError, "")

    }
    return !error;


}


validarNombre = function (nombre, idComponenteError) {

    let error = false;

    if (nombre == "") {

        mostrarTexto(idComponenteError, "campo obligatorio ")

        error = true;

    }

    if (nombre != nombre.toUpperCase()) {
        mostrarTexto("lblErrorNombre", "Ingrese MAYUSCULAS ")
        error = true;


    }
    if (nombre.length < 3) {
        mostrarTexto(idComponenteError, "Ingrese al menos 3 caracteres")
        error = true;

    }

    if (error == false) {
        mostrarTexto(idComponenteError, "")


    }

    return !error;


}

validarApellido = function (apellido, idComponenteError) {



    let error = false;
    

    if (apellido == "") {

       
        mostrarTexto(idComponenteError, "campo obligatorio ")

        error = true;

    }

    if (apellido != apellido.toUpperCase()) {
        mostrarTexto(idComponenteError, "Ingrese MAYUSCULAS  ")
       
        error = true;

    }
    if (apellido.length <= 3) {
        mostrarTexto(idComponenteError, "Ingrese al menos 3 caracteres")
        error = true;

    }
    if (error == false) {
        mostrarTexto(idComponenteError, "")


    }

    return !error;


}

validarSueldo = function (sueldo,idComponenteError) {

    let error = false;

    if (isNaN(sueldo)) {

        mostrarTexto(idComponenteError, "campo obligatorio ")

        error = true;

    }

    if (sueldo < 400 || sueldo > 5000) {

        mostrarTexto(idComponenteError, "ingrese un sueldo entre 400 y 5000")

        error = true;


    }
    if (error == false) {
        mostrarTexto(idComponenteError, "")


    }



    return !error;


}




// ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

deshabilitarCampos= function(){
    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");

}
mostraOpcionEmpleado = function () {

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");



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