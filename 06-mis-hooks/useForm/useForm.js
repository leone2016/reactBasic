import  { useState } from 'react'
/**
 * Permite manejar cualquier formulario
 * 
 * @param {*} initialState  un ojeto de cualquier tipo
 */
export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setvalues(initialState);
    }

    return [values, handleInputChange, reset ];

}
