/* operador condicional ternario */

const activo   = true;

let mensaje = activo ? 'activo': 'inactivo';

let mensaje2 = activo && 'activo'; // evita agrear el else 
console.log(mensaje);
console.log(mensaje2);