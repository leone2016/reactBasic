import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}
