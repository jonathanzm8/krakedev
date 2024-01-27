calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual>300000){ //tasa de interes del 16%

        let interes,tasaAnual;
        
        interes= (ingresoAnual*16)/100;
        tasaAnual= (interes/ ingresoAnual)* 100;
        return tasaAnual
        
    }else if(ingresoAnual>=300000 &&ingresoAnual<500000){ // tasa de interes del 15%
        let interes,tasaAnual;
        
        interes= (ingresoAnual*15)/100;
        tasaAnual= (interes/ ingresoAnual)* 100;
        return tasaAnual

        

    }else if(ingresoAnual>=500000 &&ingresoAnual< 1000000){// tasa de interes del 14%
        let interes,tasaAnual;
        
        interes= (ingresoAnual*14)/100;
        tasaAnual= (interes/ ingresoAnual)* 100;
        return tasaAnual

    }else if(ingresoAnual>=1000000 && ingresoAnual< 2000000){ // tasa anual del 13%
        let interes,tasaAnual;
        
        interes= (ingresoAnual*13)/100;
        tasaAnual= (interes/ ingresoAnual)* 100;
        return tasaAnual


    }else if(ingresoAnual>=1000000 ){ // tasa anual de 12%
        let interes,tasaAnual;
        
        interes= (ingresoAnual*12)/100;
        tasaAnual= (interes/ ingresoAnual)* 100;
        return tasaAnual

    }
}

calcularCaoacidadPagos=function(edad, ingresos, egresos){

    if (edad> 50 ){

        ingresos= 

        cuota = egresos - ingresos;

        valorPagar= (cuota* 30)/100;
        
        return valorPagar;

    }else if(edad==50){
        capacidad = egresos - ingresos;

        valorCuotas= (capacidad* 40)/100;
        
        return valorCuotas;

    }
}

calcularDescuento= function(precio, cantidad){
    if(cantidad< 3){

        let total;

        total = cantidad * precio;

        return total;

    }else if(cantidad>=3 && cantidad<=5){
        let total;
        let valorPAgar;

        total = cantidad * precio;

        descuento= (total*2)/100;

        valorPAgar= total-descuento;
        return valorPAgar;


    }else if(cantidad>=6 && cantidad<=11){
        let total;
        let  valorPAgar;

        total = cantidad * precio;

        descuento= (total*3)/100;

        valorPAgar= total-descuento;
        return valorPAgar;

    }else if(cantidad>=12){

        let total;
        let valorPAgar;

        total = cantidad * precio;

        descuento= (total*4)/100;

        valorPAgar= total-descuento;
        return valorPAgar;


    }
}

determinarColesrerolLDL=function(nivelColesterol){
    if(nivelColesterol< 100){
        return("Optimo (lo mejor para su salu)");


    }else if(nivelColesterol>= 100 && nivelColesterol<= 129){
        return("casi optimo)");


    }else if(nivelColesterol>=130 && nivelColesterol <= 159){
        return("Limite Superior del rango normal");

    }else if(nivelColesterol>=160 && nivelColesterol <= 189){
        return("Alto")

    }else if(nivelColesterol>=190){
        return("Muy alto");
        
    }

}


validarClave= function(clave){

    if(clave.length>=8 && clave.length<=16){
        return true;

    }else{
        return false;
    }



}

esMayuscula= function(caracter){
    let codigo;

    codigo= caracter.chaCodeAt(0);
    if(codigo>=65 && codigo>=90){
        return true;
    }else{
        return false;
    }

}
esMinuscula= function(caracter){
    let codigo;

    codigo= caracter.chaCodeAt(0)
    if(codigo>=97 && codigo>=122){
        return true;
    }else if(codigo>=160 && codigo>=163){
        return true;
    }else{
        return false;
    }

}

esDigito= function(caracter){
    let codigo;

    codigo= caracter.chaCodeAt(0)
    if(codigo>=48 && codigo>=9){
        return true;
    }else{
        return false;
    }

}

darPermiso= function(NotaMatematica,notaFisica,NotaGeometria){
    if(NotaMatematica>90 || notaFisica>90 || NotaGeometria>90){
      

        return false;

    }else{
        return false;
    }

}

otorgarPermiso= function (NotaMatematica,notaFisica, NotaGeometria) {
    if (NotaMatematica>90 || notaFisica>90 && NotaGeometria>80) {
        return true;

        
    }else{
        return false;
    }
    
}

dejarSalir=function(NotaMatematica,notaFisica,NotaGeometria){
    if(NotaMatematica>90 || notaFisica>90 || NotaGeometria>90 && notaFisica> NotaMatematica){
        return true;

    }else{
        return false;
    }
}




