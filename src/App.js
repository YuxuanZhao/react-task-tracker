import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Problem Set',
        day: 'May 16',
        reminder: true
    },
    {
        id: 2,
        text: 'Programming Project',
        day: 'May 17',
        reminder: true
    },
    {
        id: 3,
        text: 'Final Exam',
        day: 'May 18',
        reminder: false
    },
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No task to show')}
    </div>
  );
}

export default App;
