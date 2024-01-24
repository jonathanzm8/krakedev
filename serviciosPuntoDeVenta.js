calcularDescuento=function(monto, porcentajeDescuento){
    let descuento;

    descuento= (monto*porcentajeDescuento)/100;

    return descuento;
}

calcularIva= function(monto){
    let iva;

    iva= monto/0.12;
    return iva;

}

calcularSubTotal=function(precio, cantidad){
    let subTotal;

    subTotal= precio * cantidad;
    return subTotal;

}

calcularTotal= function(subTotal,desscuento, iva){
    let total;

    total= (subTotal-desscuento)+ iva;

    return total;

}