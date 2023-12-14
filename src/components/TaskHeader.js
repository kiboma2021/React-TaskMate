import React from 'react'

const TaskHeader = ({taskList,setTaskList}) => {
  return (
    <div className="task_header">
        <h2>Todo <span className="show_num">{taskList.length
        }</span></h2>
        <button onClick={()=>setTaskList([])}>Clear All</button>
    </div>
  )
}

export default TaskHeader
