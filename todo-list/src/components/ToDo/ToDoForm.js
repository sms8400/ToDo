import React,{useState} from 'react'
import './toDo.css'
// import ToDoList from './ToDoList';

function ToDoForm({ addTask}) {

    const [value, setValue] = useState("");
   



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
                    type="Text"
                    className="Task"
                    value={value} 
                    placeholder="Add A New Task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
     

       
        
        
        </div>
  )
}

export default ToDoForm