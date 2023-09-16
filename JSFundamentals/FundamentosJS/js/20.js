// If Ternario 
const autenticado = true
autenticado? console.log("Si esta autenticado") :  console.log("No esta autenticado")

//Doble ternario 
const saldo = 600
const pagar = 56
const tarjeta = false

saldo > pagar ? console.log("Pueds pagar"): 
    tarjeta? console.log("Puedes pagar con tarjeta") :
    console.log("No puedes pagar")