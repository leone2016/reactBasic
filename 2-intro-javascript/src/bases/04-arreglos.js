//ARREGLOS EN JAVASCRIPT

/* 
const arreglo = new Array(); //esto se llama un arreglo literal es mejor utilizar corchetes */

const arreglo = [];

arreglo.push(1); //push modifica el arreglo inicial
arreglo.push(1); //push modifica el arreglo inicial
arreglo.push(1); //push modifica el arreglo inicial
arreglo.push(1); //push modifica el arreglo inicial

let arreglo2 = [...arreglo, 5]; 
let arreglo3 = arreglo2.map( num => num*2 );

console.log(arreglo);  
console.log(arreglo2    );  
console.log(arreglo3);  