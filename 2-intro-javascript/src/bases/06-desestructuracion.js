

// desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


const useContext = ( {clave, nombre, edad, rango = 'CAPITAN' } )=>{
    return {
        nombreClave: clave,
        anios: edad,
        latitud: {
            lat: 14.13235,
            lng: -55.215454
        }
    }
}


const { nombreClave, anios, latitud  } = useContext( persona );
const { lat, lng } = latitud;
console.log(lat, lng);

