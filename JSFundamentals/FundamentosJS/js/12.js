// Funciones - Function Declaration

function sumar(numero, num2=0){ //parámetro por default
    console.log(numero + num2)
}

sumar(10, 4) // también vale poner arriba de la declaración
sumar(17) 
sumar(4, -5)

console.log("==================================")
function sumar2(numero, num2=0){ //parámetro por default
    return [numero + num2,"Hola munod"]
}

const [resultado, holaMundo] = sumar2(10, 4) // también vale poner arriba de la declaración
console.log(resultado)
console.log(holaMundo)
