//Iterar un array
const tecnologias = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]

// for each : se ejecuta una vez por cada elemento que hay en el arreglo
const arrayForeach = tecnologias.forEach(function(tech){
    return tech
})
console.log("===============================")
// map : Se utiliza más en react porque te crea un nuevo arreglo
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayForeach) //queda undefined, solo te permite enlistar
console.log(arrayMap) // crea un nuevo arreglo