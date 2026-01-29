import React, { useState } from 'react'

function TodoList () {
  
    const [tasks, setTasks] = useState(
      [
      {task: "Eat Breakfast", isDone: true},
      {task: "Make the bed", isDone: false},
      {task: "Do the Laundry", isDone: true}
      ])
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

    function completeTask (taskIndex) {

     const completedTasks = tasks.map ((task,index)=> {
        if (taskIndex==index)
          return {...task, isDone:!task.isDone}
        else
          return task
        })
      setTasks(completedTasks)
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
                <span className='text'>{task.task}</span>
                <span className='text'>{task.isDone ? "Done" : "Not yet"}</span>
                <button
                  className='delete-button'
                  onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button
                  className='complete-button'
                  onClick={() => completeTask(index)}>
                  Complete 
                </button>
            </li>
          )}
      </ol>
      </div>
  )
}

export default TodoList