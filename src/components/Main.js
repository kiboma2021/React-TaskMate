import { useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import TaskHeader from "./TaskHeader";

const Main = () => {
    const [taskList, setTaskList] =useState([]);
    const [task, setTask]=useState({});


  return (
    <div>
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <TaskHeader taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />      
    </div>
  )
}

export default Main
