const personajes = ['Goku', 'Vegeta', 'Trucks'];

const [ , p2  ] = personajes;


console.log( p2 );


const retornaArreglo = ()=>{
    return ['ABC', 1032];
}

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/* 
Tarea 
1. El 1er valor del arr se llamará nombre
2. el 2do se llamará setNombre */
const useState = (valor) => {
    return [valor, ()=>{ console.log('soy una funccion interna ')}];
}
 
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
