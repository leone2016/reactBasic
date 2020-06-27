import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <TodoListItem
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
