import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No task to show')}
    </div>
  );
}

export default App;
