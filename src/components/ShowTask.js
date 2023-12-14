import React from 'react'

const ShowTask = ({ taskList }) => {


  return (
    <>
      {taskList.map(task =>
        <div className="task_plate" key={task.id}>
            <div className="task_name">
                <h3>{task.name}</h3>
                <p>{task.time}</p>                    
            </div>
            <div className="task_actions">
                <span> <i className="fa fa-edit"></i></span>
                <span><i className='fa fa-trash'></i> </span>
            </div>
        </div>
      )}    
    </>
  )
}

export default ShowTask
