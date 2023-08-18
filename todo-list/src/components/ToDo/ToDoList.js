import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import './toDo.css'
import {Link} from 'react-router-dom'
import Completed from '../Completed/Completed'


function ToDoList({value}){

    const [tasks, setTasks] = useState([
        // {
        //     id: 1,
        //     title: "Grab some Pizza",
        //     completed: true
        // },
        // {
        //     id: 2,
        //     title: "Do your workout",
        //     completed: true
        // },
        // {
        //     id: 3,
        //     title: "Hangout with friends",
        //     completed: false
        // }
    ]);
    
    const addTask = title => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
        console.log(tasks)
    }

    const handleRemove = (id) =>  {
        const newTodos = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(newTodos);
      }


      const updateTodoItem = (task) => {
        const newTodoItems = [...tasks];
        const item = newTodoItems[task];
        let newItem = prompt(`Update ${task.title}?`, task.title);
        let todoObj = { title: newItem, completed: false };
        newTodoItems.splice(task,todoObj);
        if (newItem === null || newItem === "") {
            return;
        } else {
        task.title = newItem;
        }
        setTasks(newTodoItems);
        };


  return (
   

    
    <div className="todo-container">

<Link to="/"> Logout </Link>
<Link to="/completed"> Compeleted </Link>

    <div className="header">To Do List - Items</div>


    <div className="tasks">
        
        {tasks.map((task, index) => (
            <ToDo
                task={task} 
                index={index} 
                key={index}
                handleRemove={handleRemove}
                updateTodoItem={updateTodoItem}

                
            
            />
        ))}
    </div>
    <div className="Create-Task">
        <ToDoForm addTask={addTask}  />
    </div>
    </div>
 

 
  )
}


export default ToDoList