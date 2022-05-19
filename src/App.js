import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      console.log(tasksFromServer)
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/api/v1/task')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/task/${id}`)
    const data = await res.json()
    return data
  }

const deleteTask = async (id) => {
  await fetch(`http://localhost:8080/api/v1/task/${id}`, {method: 'DELETE'})

  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = async (id) => {
  const taskToToogle = await fetchTask(id)

  const res = await fetch(`http://localhost:8080/api/v1/task/${id}?reminder=${!taskToToogle.reminder}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true 
    }
  })

  const data = await res.json()
  console.log(data)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
}

const addTask = async (task) => {

  console.log(JSON.stringify(task))
  const res = await fetch('http://localhost:8080/api/v1/task', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true 
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
}

  return (
    <div className="container">
      <Header title="task tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No task to show')}
    </div>
  );
}

export default App;
