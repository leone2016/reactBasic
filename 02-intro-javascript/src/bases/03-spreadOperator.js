/* OBJETOS LITERALES */

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 55,
    direccion: {
        ciudad: 'New York',
        zip: '130301',
        lat: '14.3232',
        lng: '34.923333'
    }
 };
 
 console.table({ persona });
 
 /* const persona2  = persona; //copia por referencia, quire decir que cuando cualquiera de los dos objeros sean modificados, alteran al otro objeto
  */
 
  const persona2 = { ...persona };
 persona2.nombre = 'Perter';
 
 console.log(persona ); 
 console.log(persona2); 