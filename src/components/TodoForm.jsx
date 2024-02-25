
import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {

const [value, setValue] = useState("");

const handleSubmit =e => {
    e.preventDefault();
// passes the state from the todo form to the todolist
    addTodo(value);

    setValue("")
}


  return (
    <div className='form' onSubmit={handleSubmit}>
       <form action="" className="todo-form">
        
        <input type="text" className="input"  value={value} placeholder='Add a task'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="btn">Add Task</button>
        
        </form> 
    </div>
  )
}

export default TodoForm