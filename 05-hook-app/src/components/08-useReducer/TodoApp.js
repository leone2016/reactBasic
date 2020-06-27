import React, { useReducer, useEffect, useCallback } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender react',
        done: false
    
    }] */
}
export const TodoApp = () => {


    /**
     * recibe 3 parametros
     * useReducer: funcion reducer
     * initialState: estado inicial
     * init: funcion que se utilizar para inicializar el State en caso de que el state 
     *      sea procesado o haga varias acciones, cada que el componente se vuelve a redibujar
     * ò ejecutar esa accion, entonces al ser una funcion externa al componente lo hace mas ligero y rapido
     * incluso puede memorizar ese resultado en caso de necesitarlo
     */
    /*  const [state, dispatch] = useReducer(useReducer, initialState, init) */
    const [todos, dispatch] = useReducer(todoReducer, [], init);
 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

   
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    const handleDelete = useCallback(
        (todoId) => {
            const action = {
                type: 'delete',
                payload: todoId
            }
            dispatch(action);
        },
        [],
    )

    const handleToggle = useCallback(
        (todoId) => {
            dispatch({
                type: 'toggle',
                payload: todoId
            });
        },
        [],
    )

    return (
        <div>
            <h2>TodoApp ({todos.length})</h2>

            <TodoAdd handleAddTodo={handleAddTodo}/>
            <hr />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />

        </div>
    )
}
