/*  TEMPLETE STRINGS */

const nombre = "Leonardo";
const apellido = "Medina";

const nombreCompleto = ` Hola mundo ${nombre} ${apellido} ${2019 + 1}`;

function getSaludo(nombre){
    return ' Hola' + nombre;
}
console.log(`Este es un saludo: ${getSaludo(nombre)}`);