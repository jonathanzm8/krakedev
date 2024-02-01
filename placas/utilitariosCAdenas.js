

esMayuscula= function(caracter){
 
  
    if(caracter>64 && caracter<91){ // entre 65 y 90
        
        return true;
       
    }else{
        
        return false;   
       
    }

}



esDigito= function(caracter){
   
    
    if(caracter>=48 && caracter<=57){ // entre 48 y 57
       return true;

    
    }else{
        return false;
        
    }

}
esGuion= function (caracter) {
    
    if (caracter == 45) {
        return true;
     
        
    }else{
        return false
       
    
    }
       

    
}