import React,{useState,useEffect} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import './toDo.css'
import {Link, useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Config/firebaseConfig";
import Completed from '../Completed/Completed'


function ToDoList({value}){

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [tasksRemaining, setTasksRemaining] = useState(0);

    const [filter, setFilter] = useState('completed'); // Holds the current filter type
    const [tasks, setTasks] = useState((
  
    ) => JSON.parse(localStorage.getItem('tasks')) || []); // Holds the list of tasks
    

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasksRemaining(tasks.filter(task => !task.completed).length) 
      }, [tasks]);
    
    

      // Add task
    const addTask = title => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
        console.log(tasks)
    }

      // Mark task as completed
    const completeTask = index => {
        setTasks((newTasks) =>
        newTasks.map((task)=>
        task.id === index ? { ...task, completed: !task.completed } : task)
        )
    };

      // Delete a task
    const handleRemove = (id) =>  {
        const newTodos = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(newTodos);
      }

        // Edit a task
      const updateTodoItem = (task) => {
        const newTodoItems = [...tasks];
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

       
         // Handle filter change
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
    navigate('/completed')
  };

 
 // Filter tasks based on the selected filter
 const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    }
    return true;
  });


  return (
   

    
    <div className="todo-container">

{user ? (
        <div>
          <span className="username">
            <p> Hi, {user.displayName ? user.displayName : user.email} ! Welcome to Your Task Tracker. </p>
          </span>
        </div>
      ) : (
        <Link className="auth-link" to={"/signup"}>
          Sign up
        </Link>
      )}





<div className="buttons">
<Link to="/" className="logout"> Logout </Link>
<p className="logout" onClick={() => handleFilterChange('completed')}> Compeleted </p>
</div>
    <div className="header">TODO - ITEMS</div>
    <div className="header">Pending tasks ({tasksRemaining})</div>

    <div className="tasks">
        
        {tasks.map((task, index) => (
            <ToDo
                task={task} 
                index={index} 
                key={index}
                completeTask={completeTask}
                handleRemove={handleRemove}
                updateTodoItem={updateTodoItem}
                handleFilterChange={handleFilterChange}
                filteredTasks={filteredTasks}
               

                
            
            />
        ))}
    </div>
    <div className="create-task">
        <ToDoForm addTask={addTask}  />
    </div>

<p> Completed: </p>

          {filteredTasks?.map((task) => (
            <p key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                data-id={task.id}
                className="custom-checkbox"
                checked={task.completed}
                
              />
              <label htmlFor={`task-${task.id}`}>{task.title}
   
              </label>
          
              
            </p>
          ))}
        

    </div>
 

 
  )
}

export default ToDoList