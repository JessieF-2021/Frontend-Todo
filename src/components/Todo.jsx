
import React from 'react'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";


// this component displays the tasks or todos
function Todo({task, toggleComplete, deleteTodo, updateTodo}) {
  return (
    <div className='todos'>
<p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
<div className="icons">
<LuClipboardEdit className='edit-icon' onClick={() => updateTodo(task.id)}/>
<MdDeleteForever className='delete-icon' onClick={() => deleteTodo(task.id)}/>
</div>
    </div>
  )
}

export default Todo