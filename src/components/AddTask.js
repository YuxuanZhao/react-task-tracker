import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [ddl, setDdl] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please add a task')
            return
        }

        onAdd({ name, description, ddl, reminder })

        setName('')
        setDescription('')
        setDdl('')
        setReminder(false)

    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>
                Task
            </label>
            <input type='text' placeholder='Add Task' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>
                Description
            </label>
            <input type='text' placeholder='Add Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>
                Date
            </label>
            <input type='text' placeholder='Add Date' value={ddl} onChange={(e) => setDdl(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>
                Reminder
            </label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask