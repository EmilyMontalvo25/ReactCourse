// Unir dos objetos o más
const producto = {  
    nombre: "Table",
    precio : 300,
    disponible: true
}
const cliente = {  
    nombre: "Juan", // no puedo tener dos variables que se llamen igual
    premiun : true
}

//producto.cliente = cliente // Esto ya no se hace, porque estamos modificando el objeto original
//console.log(producto)

//const newObject = Object.assign(producto, cliente) // Tampoco se hace porque pierdes valores, se queda con un solo nombre
//console.log(newObject) // Se modifican los valores de objetos originales porque tiene el mismo nombre
//console.log(cliente)
//console.log(producto)

// Se coloca los 3 puntos para indicar que se haga una copia de ese objeto, y después los une en un objeto
//const newObject2 = {...producto, ...cliente} 
//console.log(newObject2)  
//console.log(cliente) // En este caso no modifica los objetos originales, pero aún sigue reemplazando el valor del nombre en el newObject2
//console.log(producto)

// DE ESTA FORMA SI 
const newObject3  = {
    producto : {...producto},
    cliente : {...cliente}
}
console.log(newObject3)