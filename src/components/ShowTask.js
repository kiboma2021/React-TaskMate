import React from 'react'

const ShowTask = ({task, handleDelete}) => {
  return (
    <div className="task_plate" key={task.id}>
        <div className="task_name">
            <h3>{task.name}</h3>
            <p>Time and Date</p>                    
        </div>
        <div className="task_actions">
            <span>Edit</span>
            <span onClick={()=>handleDelete(task.id)}>Delete</span>
        </div>
    </div>
  )
}

export default ShowTask
