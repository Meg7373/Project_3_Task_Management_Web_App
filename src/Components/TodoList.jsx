import React, { useState } from 'react'

function TodoList () {
  
    const [tasks, setTasks] = useState(["Eat Breakfast", "Make the bed", "Do laundry"]);
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

    function completeTask (index) {
      
      if (index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
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
                <span className='text'>{task}</span>
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