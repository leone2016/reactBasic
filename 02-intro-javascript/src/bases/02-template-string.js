/*  TEMPLETE STRINGS */

const name = "Leonardo";
const apellido = "Medina";

const nameCompleto = `Hello world ${name} ${apellido} ${2020 + 1}`;
/* it's importan to export for test this function */
export function getGreetings(name = 'default' ){
    return 'Hello World ' + name;
}

console.warn(`Este es un saludo: ${getGreetings(name)} || ${nameCompleto}`);