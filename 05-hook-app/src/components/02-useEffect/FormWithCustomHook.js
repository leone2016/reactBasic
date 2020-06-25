import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    // en useForm se puede manear que parametros son obligatorios
    // useForm({}, [ name, email, password ]); de esta manera de debe recibir en el hook
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;


    /* const handleInputChange =({target}) => {
         setFormState({
             ...formState,
             [target.name]: target.value
         })
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    useEffect(() => { console.log('email cambio') }, [email])
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <input
                type="text"
                name="name"
                className="from-control"
                placeholder="tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="email"
                className="from-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                className="from-control"
                placeholder=" * * * * * * "
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
            />
            <button type="submit" >G U A R D A R</button>
        </form>
    )
}
