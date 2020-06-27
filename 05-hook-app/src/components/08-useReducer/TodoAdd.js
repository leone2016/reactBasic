import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo)
        reset();
    }


    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="description"
                className="from-control"
                placeholder="Aprender ..."
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />
            <button type="submit " class="btn btn-info" >Agregar TODO</button>
        </form>
    )
}
