// Manipulación de arreglos

const tecnologias = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]
console.table(tecnologias)

// Añadir elementos
//tecnologias.push("GraphQL") //Añade al final del array
//tecnologias.unshift("GraphQL") //Añade al inicio

//Recordar que no tengo que modificar los objetos originales en React
const nuevoArreglo = [...tecnologias, "GrapQL"] // de esta forma no se modifica el objeto original
const nuevoArreglo1 = ["GrapQL", ...tecnologias]  // Ahí estoy aglegando al inicio
console.table(nuevoArreglo)
console.table(nuevoArreglo1)

//Eliminar elementos
tecnologias.pop() //Elimina del final
tecnologias.shift()// Elimina del inicio
tecnologias.splice(2,1) // Elimina el (index, apartir del index cuando valores siguientes elimino)
console.table(tecnologias)

// Los anteriores no deben modificarse con react porque modifican al arreglo original
//Filter te retorna un arreglo nuevo, no modifica el original

const newArray = tecnologias.filter(function(tech){ // Filter itera sobre el arreglo
    console.log(tech) // imprime los valores
})

// para quitar uno me tiene que retornar todas menos lo que quiero quitar 
const newArray2 = tecnologias.filter(function(tech){ // Filter itera sobre el arreglo
    return tech !== "CSS"// imprime los valores que NO sean CSS
})
console.table(newArray2)

//Reemplazar del array
//tecnologias[0] = "Hola" // Esto modifica el arreglo original, así que no es válido
//console.table(tecnologias)

const newArray3 = tecnologias.map(function(tech){
    if(tech === "CSS"){
        return "Hola"
    } else {
        return tech
    }
})
console.table(newArray3)

