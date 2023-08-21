import React from 'react'
import ToDoList from './ToDoList';
import ToDo from './ToDo';

function CompeletedList({filter,setFilter, tasks, task}) {

   
        //  // Handle filter change
        
         
         // Filter tasks based on the selected filter
         const filteredTasks = tasks?.filter((task) => {
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
    <div>
        
        
 

       

        <p> Completed: </p>

{/* {filteredTasks?.map((task) => (
    <ToDoList
  key={task.id}>
    <input
      type="checkbox"
      id={`task-${task.id}`}
      data-id={task.id}
      className="custom-checkbox"
      checked={task.completed}
      
    />
  
    </p>
    <label htmlFor={`task-${task.id}`}>{task.title}
    </label>

))} */}




<div className="tasks">
        
        {tasks?.map((task, index) => (
            <ToDo
                task={task} 
                index={index} 
                key={index}
                // completeTask={completeTask}
                // handleRemove={handleRemove}
                // updateTodoItem={updateTodoItem}
                // handleFilterChange={handleFilterChange}
                // filteredTasks={filteredTasks}
               

                
            
            />
        ))}
    </div>




</div>


  )
}

export default CompeletedList