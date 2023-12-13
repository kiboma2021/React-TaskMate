import React from 'react'

const ShowTask = ({task, handleDelete}) => {
  return (
    <div className="task_plate" key={task.id}>
        <div className="task_name">
            <h3>{task.name}</h3>
            <p>{task.time}</p>                    
        </div>
        <div className="task_actions">
            <span> <i className="fa fa-edit"></i></span>
            <span onClick={()=>handleDelete(task.id)} style={{color:'red'}}><i className='fa fa-trash'></i> </span>
        </div>
    </div>
  )
}

export default ShowTask
