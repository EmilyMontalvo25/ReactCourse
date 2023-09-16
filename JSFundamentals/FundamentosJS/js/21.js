//Alcance de una variable, Scope
 const precio = 300 

 function unaFuncion(){
    const precio = 600// esta variable existe dentro de las llaves 
    console.log(precio)
 }

 
 console.log(precio)
 unaFuncion()