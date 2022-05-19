import { FaTimes } from 'react-icons/fa/'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle }) => {

    const [showDescription, setShowDescription] = useState(false)
    
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} onMouseEnter={() => setShowDescription(!showDescription)} onMouseLeave={() => setShowDescription(!showDescription)}>
        <h3>{task.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/></h3>
        {showDescription && <p>{task.description}</p>}
        {!showDescription && <p>{task.ddl}, due in {task.restDay} days</p>}
    </div>
  )
}

export default Task