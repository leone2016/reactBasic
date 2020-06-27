import React from 'react'

export const TodoListItem = ({ todo,index, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id} className="">
            <span onClick={() => handleToggle(todo.id)}
                className={`${todo.done && 'complete'}`} >
                {index + 1}) {todo.desc}
            </span>
            <button class="btn btn-danger"
                onClick={() => handleDelete(todo.id)}>
                Borrar
            </button>
        </li>

    )
}
