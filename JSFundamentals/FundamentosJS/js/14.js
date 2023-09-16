//Funciones - Arrow Function

const sumar = function(num, num2){
    return num + num2
}

const sumar1 = (num, num2) => num + num2 // Si tengo más de una línea se ponde las llaver

const resultado = sumar1(10,4) 
console.log(resultado)

//Si tengo un parámetro 
const sumar2 = num => num + 56
const resultado2 = sumar2(10) 
console.log(resultado2)

// dar por implicito el return
const sumaArow = () => 2*2
const resultado3 = sumaArow()
console.log(resultado3)