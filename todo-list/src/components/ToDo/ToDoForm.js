import React,{useState} from 'react'
import './toDo.css'
// import ToDoList from './ToDoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToDoForm({ addTask}) {
    const notify = () => toast("Added new task");
    const [value, setValue] = useState(""); // Holds the value of the input field
   


    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
        console.log(value)
    }

    
    


  return (
    <div>
      
      <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="taskTwo"
                    value={value} 
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)} // Handle input change
                />
                  <button onClick={notify} type='submit'>Add Todo</button>
                  <ToastContainer />
            </form>
     

       
        
        
        </div>
  )
}

export default ToDoForm