// COmparación y operador estricto
const num1 = 4
const num2 = "4"

if (num1 == num2){ //El doble signo no es estricto, revisar solo por el valor
    console.log("Iguales")
}else{
    console.log("No iguales")
}

if (num1 === num2){ //El doble signo es estricto, revisa por valor y por tipo de dato
    console.log("Iguales")
}else{
    console.log("No iguales")
}

if (num1 === Number(num2)){ //El doble signo es estricto, revisa por valor y por tipo de dato
    console.log("Iguales")
}else{
    console.log("No iguales")
}

const autenticado = true
if(autenticado){  //No hace falta poner el  igual para true
    console.log("Si esta autenticado")
}

