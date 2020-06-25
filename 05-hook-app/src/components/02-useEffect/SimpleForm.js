import React, { useEffect, useState } from 'react'
import { Mensaje } from './Mensaje';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // cada que exista cambio en el estado va llamar este efecto
    useEffect(() => {
        console.log('hey');
    }, [])

    // este efecto va estar pendiente de los cambio que se realicen en el formState
    useEffect(() => {
        console.log('hey formState');
    }, [formState]);

    // efecto que esta pendiente cuando se cambie el email
    useEffect(() => {
        console.log('hey email');
    }, [email])

    const handleInputChange =({target}) => {
         setFormState({
             ...formState,
             [target.name]: target.value
         })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <input
                type="text"
                name="name"
                className="from-control"
                placeholder="tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
            <input
                type="text"
                name="email"
                className="from-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
            {name === '123' && <Mensaje/>}
        </>
    )
}
