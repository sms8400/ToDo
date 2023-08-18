import React, {useState} from 'react'
import { LuTrash2, LuEdit } from "react-icons/lu";
import './toDo.css'
// import Header from '.components/Header/header';

function ToDo({task, handleRemove, updateTodoItem}) {





return (

 


  <div>




  <div className="todo-list">


{/* checkbox and task  */}
<div className="taskBox">
<input value={task} type="checkbox" />
<span className="task">{task.title} </span>
</div>

{/* delete and edit button  */}
<LuTrash2 className="theme-icon theme-icon-active" onClick={() => handleRemove(task.id)}/>
 <LuEdit onClick={() => updateTodoItem(task)} edit ></LuEdit>



  </div>


</div>

);
}



export default ToDo