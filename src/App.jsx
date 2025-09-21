import React, { useState } from 'react'
import "./index.css"

function App() {

  const [tasks,setTasks] = useState([])
  const [date,setDate] = useState("")
  const [duty,setDuty] = useState("")

  function handleDuty(event){
    setDuty(event.target.value)
  }

  function handleDate(event){
    setDate(event.target.value)
  }

  function addTask(){
    const newTask = {
                      task : duty,
                      dueDate : date
                    }

    setTasks(prevTasks=>[...prevTasks,newTask])
  }

  return (
    <div className='app-container'>
      <h1 style={{textAlign:"center"}}>Todo App with React</h1>
      <div className="controls">
        <input type="text" value={duty} onChange={handleDuty} className='task-input' placeholder='Enter your todo here...'/>
        <input type="date" value={date} onChange={handleDate} className='date-input' placeholder='Enter the due date here...'/>
        <button onClick={addTask} className='add-btn'>Add Task</button>
      </div>

      <div className="task-showcase">
        <div className="heading">
          <div><h2>Task</h2></div>
          <div><h2>Date</h2></div>
          <div><h2>Controls</h2></div>
        </div>

        {tasks.map((task,index)=>{
          return(
            <div key={index} className='tasks'>
              <div>{task.task}</div>
              <div>{task.dueDate}</div>
              <div>Delete</div>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default App