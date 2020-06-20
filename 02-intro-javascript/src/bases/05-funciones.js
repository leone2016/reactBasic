//funciones Js

/* const saludar = ( nombre ) =>   ` HOla ${ nombre }`; */

// it's import to export for test
export const getUser = () => ({
    nombre: 'Leonardo',
    apellido: 'Medina',
});

/* console.log(saludar('Goku'));
console.log(getUser);  */



// tarea 
/* 1. Transforme a una función de flecha
2. Tien que retornar un objeto implícito
3. Pruebas */
export const  getUsuaruiActivo = (  nombre ) =>({ 
    uuid: 'asdasdasd645656',
    userName: nombre    
})  


const usuarioActivo = getUsuaruiActivo('Leonardo');
/* console.log(usuarioActivo); */
