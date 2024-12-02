import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    if(newTask.trim() === "") {
        setTasks([...tasks , newTask]);
        setNewTask("");
    }

};

 const removeTask = (index) => {
    const updateTasks = tasks.filter((task, i) => i !== index);
    setTasks(updateTasks);
    };

  return (
    <div>
    <h2>To-Do List</h2>
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default TodoList;