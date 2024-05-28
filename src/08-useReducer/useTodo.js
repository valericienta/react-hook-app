import React, { useReducer, useEffect, useState } from 'react'
import { todoReducer } from './todoReducer'


export const useTodo = (initialState) => {

   
      const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
      }


    const handleNewTodo = (todo) => {
        dispatchTodoAction({type: 'Add Todo',payload: todo});
    }

    const handleDeleteTodo = (id) => {
        dispatchTodoAction({ type: 'Delete Todo', payload: id});
    }

    const handleToggleTodo = (id) => {
        dispatchTodoAction({ type: 'Toggle Todo', payload: id })
    }

    const [todos, dispatchTodoAction] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    return {
        todos: todos,
        todosCount: todos.length,
        pendientesCount:  todos.filter(x=>x.done==false).length,
        handleToggleTodo: handleToggleTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleNewTodo: handleNewTodo
    }
}