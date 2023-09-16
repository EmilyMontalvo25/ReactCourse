// Objetos
//const nombre = "Table"
//const precio = 300
//const disponible = true

// Un objeto puede almacenar una gran cantidad de info
const producto = {
    nombre: "Table",
    precio : 300,
    disponible: true
}
console.log(producto)
console.table(producto)
console.log(producto.nombre)

// Destructuring: sacar un valor de una estructura, además de extraer el valor, crea una variable

const {imagen} = producto // crea la imagen en el objeto producto 
console.log(imagen) // sale undefined
const {nombre, precio, disponible} = producto  // aquí extrae los valores
console.log(nombre) // imprime Table
console.log(precio)
console.log(disponible)

// Object Literal Enhacement : variables que están fuera de un objeto, las coloca dentro 
const autenticado = true
const usuario = "Juan"
const firma1 = true

const nuevoObjeto = {
    autenticado : autenticado, // cuando ambos son iguales puedo deshacerme del de lado derecho, ejemplo abajo
    usuario,
    firma : firma1 // cuando son diferentes tengo que especificar
}
console.table(nuevoObjeto)


