
const tecnologias = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]
const numeros = [10,20,30]

let newArray
//Filter
newArray = tecnologias.filter(tech =>tech !== "CSS")
console.table(newArray)

//Verificar si existe
const resultado = tecnologias.includes("HTML")
console.log(resultado)

//Si se cumple con una condición
const result= numeros.some(numero => numero >15) //Alguno de estos números es mayor a 15?
console.log(result) // verdad

//Find devuelve el primer elemento que cumpla la condición
 const resultado2 = numeros.find(numero => numero >15)
 console.log(resultado2) // 20

 // Every - Retorna true si todos cumplen la condición, caso contrario false
 const resultado3 = numeros.every(numero => numero >15)
 console.log(resultado3) // false

  // Reduce - Acumula en el total
  const resultado4 = numeros.reduce((total,numero) => numero + total, 0) // El cero es el número con el que inicia
  // total es el acumulado y numero es el elemento actual
  console.log(resultado4) // false

  //Filter crea un nuevo array en base a una condición
  const resultado5 = tecnologias.filter(tech => tech !== "NodeJs")
  console.log(resultado5)
  const resultado6 = numeros.filter(num => num>12)
  console.log(resultado6)

  // for each : se ejecuta una vez por cada elemento que hay en el arreglo
const arrayForeach = tecnologias.forEach((tech,index)=> console.log(index, tech))
console.log("===============================")
// map : Se utiliza más en react porque te crea un nuevo arreglo
const arrayMap = tecnologias.map(tech => tech)
console.log(arrayMap)
