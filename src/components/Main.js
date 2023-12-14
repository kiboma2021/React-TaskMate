import { useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import TaskHeader from "./TaskHeader";

const Main = () => {
    const [taskList, setTaskList] =useState([]);


  return (
    <div>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <TaskHeader taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} />      
    </div>
  )
}

export default Main
