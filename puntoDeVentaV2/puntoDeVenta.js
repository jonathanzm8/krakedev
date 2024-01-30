calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    // let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;


    nombreProducto = recuperarTexto("txtProducto");

    precioProducto = recuperarFloat("txtPrecio");

    cantidad = recuperarInt("txtCantidad");

    if (esProductoValido(nombreProducto, "lblError1") &&  esCantidadValida(cantidad, "lblError2") && esPrecioValido(precioProducto, "lblError3") ) {

        valorSubtotal = calcularSubTotal(precioProducto, cantidad);

        mensaje = valorSubtotal, "";
        mostrarTexto("lblSubtotal", mensaje);

        valorDescuento = calcularDescuentoPorVolumen(cantidad, valorSubtotal);

        mostrarTexto("lblDescuento", valorDescuento)

        let iva
        iva = (valorSubtotal - valorDescuento);

        valorIVA = calcularIva(iva)

        let ivaRedondeado;

        ivaRedondeado= valorIVA.toFixed(2);


        mostrarTexto("lblValorIVA", ivaRedondeado);

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA)

        let TotalRedondeado

        TotalRedondeado = valorTotal.toFixed(2);
        mostrarTexto("lblTotal", TotalRedondeado);


    }



    



}
limpiar = function () {

    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtCantidad", "")
    mostrarTextoEnCaja("txtPrecio", "")


    mostrarTexto("lblSubtotal", "0.0")
    mostrarTexto("lblDescuento", "0.0")
    mostrarTexto("lblValorIVA", "0.0")
    mostrarTexto("lblTotal", "0.0")
    mostrarTexto("lblError1", "")
    mostrarTexto("lblError2", "")
    mostrarTexto("lblError3", "")
    // mensaje = " ";
    // mostrarTexto("lblResumen", mensaje)

}


calcularDescuentoPorVolumen = function (cantidad, subtotal) {


    if (cantidad < 3) {
        let descuento;
        descuento = subtotal * 0
        return descuento;


    } else if (cantidad >= 3 && cantidad <= 5) {
        let descuento;

        descuento = (subtotal * 3) / 100;

        return descuento;

    } else if (cantidad >= 6 && cantidad <= 11) {
        let descuento;

        descuento = (subtotal * 4) / 100;

        return descuento;
    } else if (cantidad >= 12) {
        let descuento;

        descuento = (subtotal * 5) / 100;

        return descuento;
    }



}


esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;
    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }


    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "nombre no mas de 10 caracteres")
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "")

    }
    return !hayErrores;



}

esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;
   
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 100")
        hayErrores = true;

    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, " ");

    }
    return !hayErrores;


}

esPrecioValido = function (precio, idComponenteError) {
    hayErrores = false;
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }


    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 50")
        hayErrores = true;

    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");

    }
    return !hayErrores;



}