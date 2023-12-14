import { useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import TaskHeader from "./TaskHeader";

const Main = () => {
    const [taskList, setTaskList] =useState([
        {id: 21554, name:"wash utensils"},
        {id: 23565, name:"clean the house"},
    ]);


  return (
    <div>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <TaskHeader taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} />      
    </div>
  )
}

export default Main
