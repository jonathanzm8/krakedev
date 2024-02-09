let clientes = [
    { nombre: "jonathan", edad: 25, cedula: "164323" },
    { nombre: "Pepe", edad: 34, cedula: "1623423" },
    { nombre: "luis", edad: 30, cedula: "3442323" },
    { nombre: "alejandro", edad: 22, cedula: "3442244" }
]

crearCliente= function () {
    let valorNombre, valorEdad, valorCedula;

    valorNombre= recuperarTexto("txtNombre");
    valorEdad= recuperarFloat("txtEdad");
    valorCedula= recuperarTexto("txtCedula")

    let nuevoCLiente= {};

    nuevoCLiente.nombre= valorNombre;
    nuevoCLiente.edad= valorEdad;
  
    nuevoCLiente.cedula= valorCedula;
    


    agregarCliente(nuevoCLiente);
    
}


realizarBusqueda= function(){
    
    let cedula= recuperarTexto("txtCedulaBusqueda")
    
     resultado= buscarCliente(cedula)

     if (resultado== null) {
        alert("cliente no encontrado")
        
     }else{
        mostrarTextoEnCaja("txtNombre", resultado.nombre);
        mostrarTextoEnCaja("txtEdad", resultado.edad);
        mostrarTextoEnCaja("txtCedula", resultado.cedula);
     }


}

guardarCambios= function(){
    let valorNombre, valorEdad, valorCedula;

    valorNombre= recuperarTexto("txtNombre");
    valorEdad= recuperarFloat("txtEdad");
    valorCedula= recuperarTexto("txtCedula")

    let datosCLiente= {};

    datosCLiente.nombre= valorNombre;
    datosCLiente.edad= valorEdad;
   
    datosCLiente.cedula= valorCedula;

    modificarCLiente(datosCLiente);
    mostarCliente();

}

modificarCLiente= function(cliente){
     let clienteEncontado= buscarCliente(cliente.cedula)
     if(clienteEncontado != null){
        clienteEncontado.nombre= cliente.nombre;
        clienteEncontado.edad= cliente.edad;
     }

}


buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontado= null;
    for(let i= 0; i< clientes.length; i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontado= elementoCliente;
            break;
        }
    }

    return clienteEncontado;

}

agregarCliente = function (cliente) {
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if (resultado==null) {
        clientes.push(cliente);

        alert("cliente agregado")

        mostarCliente();


    }else{
        alert("ya existe un cliente con la cedula: " + cliente.cedula)
    }


}






mostarCliente = function () {
    let contenidoTabla
    let element
    let cmpTabla

    cmpTabla = document.getElementById("idTabla")

    contenidoTabla = "<table> <tr>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "<th>Cedula</th>" +
        "</tr>"

    for (let i = 0; i < clientes.length; i++) {
        element = clientes[i];
        contenidoTabla +=
            "<tr>" +
            "<td>" + element.nombre + "</td>" +
            "<td>" + element.edad + "</td>" +
            "<td>" + element.cedula + "</td>" +
            "</tr>"
    }

    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla

}