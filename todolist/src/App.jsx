import { useState } from 'react'
import './App.css'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

function App() {

const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }
  
  function toggleTask(taskText) {
    setTasks(prev =>
      prev.map(item =>
        item.taskText === taskText
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  return (
    <>
      <h1>To Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </>
  )
}

export default App
