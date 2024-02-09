probarObjetos = function () {
    let persona = {
        nombre: "jonathan",
        apellido: "alvarez",
        edad: 23,
        estaVivo: true

    }

    console.log(persona.nombre)
    console.log(persona.apellido)
    if (persona.estaVivo == false) {
        console.log("ha muerto")
    } else {
        console.log("esta vivo")
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "zapatos deportivos",
        precio: 30.8,
        stock: 12
    }

    let producto2 = {
        nombre: "calentador ",
        precio: 22.5,
        stock: 8
    }

    console.log(producto1.nombre)
    console.log(producto2.nombre)
    if (producto1.stock > producto2.stock) {
        console.log("producto1 tiene mayor stock que producto2")
    } else if (producto2.stock > producto1.stock) {
        console.log("producto2 tiene mator stock que producto1")

    } else {
        console.log("ambos productos tiene el mismo estock")
    }
}

modificarAtributos = function () {
    let cuenta = {
        cuenta: "4323259887",
        saldo: 0.0
    }

    cuenta.saldo = 100
    cuenta.saldo += 10

    console.log(cuenta.saldo)
}

crearCliente = function () {
    let cliente = {}

    cliente.nombre = "jonathan";
    cliente.apeliido = "alvarez";
    cliente.cedula = "12343545";
}


//-----------------------------------------------------------

probarMayor = function () {
    let pers1 = {
        nombre: "jonathan",
        edad: 24
    }

    let pers2 = {
        nombre: "Eduardo",
        edad: 28
    }
    let mayor

    mayor = determinarMayor(pers1, pers2);
    if (mayor != null) {
        console.log("la persona mayor es " + mayor.nombre);


    }

}


determinarMayor = function (persona1, persona2) {

    if (persona1.edad > persona2.edad) {
        return persona1
    } else if (persona2.edad > persona1.edad) {
        return persona2
    } else {
        return null;
    }

}