


import React from 'react'
import { useState } from 'react'

function UpdateTodoForm({updateTodo, task}) {

const [value, setValue] = useState(task.task);

const handleSubmit = e => {
    e.preventDefault();
// passes the state from the todo form to the todolist
    updateTodo(value, task.id);

    setValue("")
}


  return (
    <div className='form' onSubmit={handleSubmit}>
       <form action="" className="todo-form">
        
        <input type="text" className="input"  value={value} placeholder='Update task here'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="btn">Update Task</button>
        
        </form> 
    </div>
  )
}

export default UpdateTodoForm