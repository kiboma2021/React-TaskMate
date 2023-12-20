import React from 'react'

export const ShowTask = ({ taskList,setTaskList,task,setTask }) => {
  function handleDelete(id){
    setTaskList(taskList.filter(task => task.id !== id))
  }

  function handleEdit(id) {
    const edit_task = taskList.find(task => task.id === id)
    setTask(edit_task);
    
  }

  return (
    <>
      {taskList.map(task =>
        <div className="task_plate" key={task.id}>
            <div className="task_name">
                <h3>{task.id} - {task.name}</h3>
                <p>{task.time}</p>                    
            </div>
            <div className="task_actions">
                <span onClick={()=>handleEdit(task.id)}> <i className="fa fa-edit"></i></span>
                <span onClick={()=>handleDelete(task.id)} style={{color:'red'}}><i className='fa fa-trash'></i> </span>
            </div>
        </div>
      )}    
    </>
  )
}

