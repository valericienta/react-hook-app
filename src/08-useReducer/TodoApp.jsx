import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodo } from './useTodo';

const TodoApp = () => {

  const { todos, todosCount,  pendientesCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo([])

  return (
    <>
      <h1>TodoApp ({todosCount}), <small>pendientes: {pendientesCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}

export default TodoApp
