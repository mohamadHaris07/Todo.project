import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Todo.css";
import AddTasks from './AddTasks';
import ListTasks from './ListTasks';
import setTasks from "react"

const Todo = () => {
   const [tasks, setTasks] = useState([
      
    ]);
    useEffect(()=>{
      document.title = `you have ${tasks.length}pending task(s)`
    });



  const  addTask = (title)=>{

    const newTask = [...tasks, {title}];
    setTasks(newTask);

  };

const removeTask = (index)=>{
  const newTask = [...tasks]
  newTask.splice(index,1);
  setTasks(newTask)
}

  return (
    <>
      <div className='todo-container'>
        <div className='header'>Todo app</div>
        <div className='add-task'>
            <AddTasks addTask={addTask}/>

        </div>
        <div className='tasks'>
            {tasks.map((task, index)=> (
              <ListTasks task={task} removeTask={removeTask} index={index} key={index} />
            ))}
          
        </div>
      </div>

   </>
  );
};

export default Todo;