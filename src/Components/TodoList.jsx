import React, { useState } from 'react'

function TodoList () {
  
    const [tasks, setTasks] = useState([
      {name: "Eat Breakfast", isDone: false  },
      {name: "Make your bed", isDone: true  },
      {name: "Do the Laundry", isDone: false  }])

    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
      setNewTask(event.target.value);
    }

    function addTask() {

      if (newTask.trim() !== ""){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");
      }
    }

    function deleteTask(index) {
      
      const updatedTasks = tasks.filter((element, i) => i !== index);
      setTasks(updatedTasks);
    }

    function completeTask(index) {
      const completedTasks = tasks.map ((task,index)=> {
        if (setTasks==index)
          return {...tasks, isDone:!tasks.isDone}
        else
          return tasks
        }
      )
    }
  
  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
          <input
            type="text"
            placeholder="Enter a Task"
            value={newTask}
            onChange={handleInputChange}/>
          <button
            className="add-button"
            onClick={addTask}>
            Add
          </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task.name}</span>
                <span className='text'>{task.isDone ? "":""}</span>
                <button
                  className='delete-button'
                  onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button
                  className='complete-button'
                  onClick={(setTasks) => (completeTask(setTasks,index))}>
                  Complete 
                </button>
            </li>
          )}
      </ol>
      </div>
  )
}

export default TodoList