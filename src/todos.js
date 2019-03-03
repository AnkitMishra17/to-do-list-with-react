import React from 'react';

const todos = ({Todos , Deletetodo}) =>{

  const todolist = Todos.length ? (
    Todos.map(todo => {
      return(
        <div key={todo.id} className='mt-3'>
        <span onClick={() =>{Deletetodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ):(
    <p>No Todos Left</p>
  )

  return(
    <div className="mt-3">
    {todolist}
    </div>
  )
}
export default todos;
