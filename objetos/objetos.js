probarObjetos= function(){
    let persona={
        nombre: "jonathan",
        apellido: "alvarez",
        edad: 23,
        estaVivo: true

    }

    console.log(persona.nombre)
    console.log(persona.apellido)
    if(persona.estaVivo== false){
        console.log("ha muerto")
    }else{
        console.log("esta vivo")
    }
}

crearProducto= function(){
    let producto1={
        nombre: "zapatos deportivos",
        precio: 30.8,
        stock: 12
    }

    let producto2={
        nombre: "calentador ",
        precio: 22.5,
        stock: 8
    }

    console.log(producto1.nombre)
    console.log(producto2.nombre)
    if(producto1.stock> producto2.stock){
        console.log("producto1 tiene mayor stock que producto2")
    }else if(producto2.stock>producto1.stock){
        console.log("producto2 tiene mator stock que producto1")

    }else{
        console.log("ambos productos tiene el mismo estock")
    }
}