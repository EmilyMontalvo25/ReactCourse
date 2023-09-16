const saldo = 600
const pagar = 56
const tarjeta = false


if (saldo>pagar || tarjeta){ // es o, si se cumple uno, se cumple
    console.log("Puedes pagar ")
}else{
    console.log("No puedes pagar")
}

if (saldo>pagar && tarjeta){ // es un y, debes cumplir las dos condiciones
    console.log("Puedes pagar ")
}else{
    console.log("No puedes pagar")
}

