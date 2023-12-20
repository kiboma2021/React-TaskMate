import { useState, useEffect } from "react";

import { AddTask,ShowTask,TaskHeader } from "./index";

export const Main = () => {
    const [taskList, setTaskList] =useState(JSON.parse(localStorage.getItem("taskList")) || []);
    const [task, setTask]=useState({});

    useEffect(() => {
      localStorage.setItem("taskList",JSON.stringify(taskList));
    },[taskList])


  return (
    <div>
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <TaskHeader taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />      
    </div>
  )
}

