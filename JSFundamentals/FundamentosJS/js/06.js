// Destructuring con 2 o más objetos
const producto = {  
    nombre: "Table",
    precio : 300,
    disponible: true
}
const cliente = {  
    nombre: "Juan", // no puedo tener dos variables que se llamen igual
    premiun : true
}

const {nombre, precio, disponible}= producto
const {nombre: nombreCliente , premiun} = cliente // Al nombre le doy un alias para que se identifique con eso  

console.log(nombre, precio, disponible)
console.log(nombreCliente, premiun)

