import { FaTimes } from 'react-icons/fa/'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle }) => {
    
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/></h3>
        <p className='desc'>{task.description}</p>
        <p className='ddl'>{task.ddl}</p>
    </div>
  )
}

export default Task