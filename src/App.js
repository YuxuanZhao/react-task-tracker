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
  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
