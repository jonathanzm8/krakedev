obtenerAleatorio= function(){
    let aleatorio, numeroMultiplicado, numeroEntero, valorDado;
    aleatorio=Math.random();// para hacer aleatorio
    
    numeroMultiplicado= aleatorio * 3; // 
    // console.log(numeroMultiplicado);
    numeroEntero= parseInt(numeroMultiplicado);
    // console.log(numeroEntero);

    valorDado= numeroEntero + 1;

    // console.log(valorDado);
   

    return valorDado;



}

generarElemento=function(){
    let numeroAleatorio;

    numeroAleatorio= obtenerAleatorio();

    if(numeroAleatorio==1){
        numeroAleatorio= "piedra";
        console.log(numeroAleatorio)
        return numeroAleatorio;
        
       
    }else if(numeroAleatorio==2){
        numeroAleatorio= "papel";
        console.log(numeroAleatorio)
        return numeroAleatorio;
      


    }else if(numeroAleatorio==3){
        numeroAleatorio= "tijera";
        console.log(numeroAleatorio)
       return numeroAleatorio;
        
    }
   
}

determinarGanador= function (jugardor1,jugardor2) {

    if(jugardor1== "papel" && jugardor2=="papel"){
        return 0;
    }else if(jugardor1== "tijera" && jugardor2=="tijera"){
        return 0;

    }else if(jugardor1== "piedra" && jugardor2=="piedra"){
        return 0;
    }else if(jugardor1== "piedra" && jugardor2=="papel"){
        return 2; 
    
    }else if(jugardor1== "piedra" && jugardor2=="tijera"){
        return 1;
    
    }else if(jugardor1== "papel" && jugardor2=="piedra"){
        return 1;
    }else if(jugardor1== "papel" && jugardor2=="tijera"){
        return 2;
    }else if(jugardor1== "tijera" && jugardor2=="papel"){
        return 1;
    }else if(jugardor1== "tijera" && jugardor2=="piedra"){
        return 1;
    }

}

generarRuta= function(nombre){
   

    if(nombre== "piedra"){

        return "./imagenes/piedra.png";
       
    }else if(nombre== "papel"){
        
    
        return "./imagenes/papel.png";
       


    }else if(nombre== "tijera"){
        return "./imagenes/tijeras.png";
       


    }
    
}