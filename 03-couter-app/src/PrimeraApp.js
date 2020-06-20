import React from 'react'
import PropTypes from 'prop-types';
//FUNCTIONAL COMPONENTS


/* {saludo = 'porDefecto'} */
const PrimeraApp = ({ saludo, subTitulo}) => {

    const data = {
        nombre: "Leonardo",
        apelido: "Medina"
    };
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
            <p>{subTitulo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps = {
    subTitulo: "soy un subtitulo" 
}
export default PrimeraApp;