//Estructuras y tipos de datos 
//1. Undefined > si no tiene asignado un valor 
let cliente;
console.log(cliente);
console.log(typeof cliente);

//2. Boolean >true or false
const descuento = true;
console.log(descuento);
console.log(typeof descuento);

//3. Number > -,+,/, todos entran en numeros
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -1;
console.log(typeof numero1, typeof numero2,  typeof numero3);

// 4. String > cadenas de texto

const alumna = 'Juan';
let producto = 'Producto';

const numeroTest = 30; //i esta sin comilla le asigna un collar ash jajaja 
const numeroTest2 = "30";
console.log(typeof numeroTest, typeof numeroTest2);

// 5. BigInt > numero muy grande 
const numeroGrande = BigInt(34567890);// no se pude mezclar con cualquier otro tipo de dato
console.log( typeof numeroGrande);

const numero4 = 10;
const numero5 = 20

console.log( numero4 + Number(numeroGrande), typeof numeroGrande, typeof Number(numeroGrande));

const numero6 = 30;
const numero7 = "30";
console.log(typeof String(numero6), typeof document);
