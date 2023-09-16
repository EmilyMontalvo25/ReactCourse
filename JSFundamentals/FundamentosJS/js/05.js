// Objetos manipulación
const producto = {  // El const no evita que puedas modificar las propiedades
    nombre: "Table",
    precio : 300,
    disponible: true
}

//Reescribir un valor
producto.nombre = "Monitor"
console.table(producto)

// Añadir un valor, si no existe, lo va a añadir
producto.imagen = "imagen.jpg"
console.table(producto)


// Eliminar un valor
delete producto.disponible
console.table(producto)

//Ahora quiero que nadie pueda modificar mi object, no permite borrar, añadir ni modificar

Object.freeze(producto)
delete producto.nombre
console.table(producto) // no se borra porque mi objeto está congelado

// Quiero que el objeto me permita
// Object.seal(producto) // solo deja modificar la propiedades existentes, no permite añadir ni eliminar