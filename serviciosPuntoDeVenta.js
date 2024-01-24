calcularDescuento=function(monto, porcentajeDEscuento){
    let desscuento;

    desscuento= (monto * porcentajeDEscuento)/ 100;

    return desscuento;
}

calcularIva= function(monto){
    let iva;

    iva= monto/1.21;
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