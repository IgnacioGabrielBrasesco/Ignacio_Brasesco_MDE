//Ejercicio 1:
//  Crear una función que reciba como parámetro una nota y retorne una de 
//estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

//Nota es menor a 4 - LIBRE
//Nota es menor a 7 y no es LIBRE - REGULAR 
//Nota mayor que 6  - PROMOCIONADO.


function condicion(nota){
    if(nota < 4){
       console.log("Libre");        
    } else if(nota < 7 && nota != "Libre"){
        console.log("Regular");  
    } else if(nota > 6){
        console.log("Promocionado");  
    }
};

condicion(5)