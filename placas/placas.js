

validarPlaca = function(){
    let placa, erroresEstructura;

    placa= recuperarTexto("txtPlaca");

     erroresEstructura=validarEstructura(placa);

     obtenerProvincia(placa)

     obtenerTipoVehiculo(placa)
     obtenerPicoYplaca(placa)

    

    
}