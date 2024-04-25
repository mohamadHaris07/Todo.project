import React, { useState } from 'react'

const AddTasks = ({addTask}) => {
    const [value, setValue] = useState("");

    const addItam = ()=>{
        addTask(value);
        setValue('')
    };
  return (
    <>
    
        <div className='input-container'>
            <input type='text' className='input' placeholder='Add a new task'
            
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
            />



            <button onClick={addItam} className='Add-btn'>ADD</button>


        </div>

    </>
        );
};

export default AddTasks;