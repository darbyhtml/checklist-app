import React, { useState } from 'react';
// Импортируем стили
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Мой чеклист</h1>
      
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button onClick={addTask}>Добавить</button>
      </div>

      <ul className="tasks-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span className={`task-text ${task.done ? 'task-done' : ''}`}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
