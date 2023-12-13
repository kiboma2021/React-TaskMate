import { useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";

const Main = () => {
    const [tasks, setTasks] =useState([
        {id: 1234, name: 'Wash utensils'},
        {id: 1235, name: 'Go jogging'},
        {id: 1236, name: 'Write code'},
        {id: 1237, name: 'Go to the market'},
        {id: 1238, name: 'Teach children'},
        {id: 1239, name: 'Drive home'},
    ]);
    const [name, setName] = useState("");

    function handleName(event){
        setName(event.target.value);
        console.log(name);
    }
    function handleSubmit(event){
        event.preventDefault();
        const taskid= Math.floor(Math.random()*10000)
        const task = {
            id: taskid,
            name: name
        }

        console.log(task);

        setTasks([...tasks, task]);
        setName("");
    }

    function handleDelete(id){
        console.log("Clicked.....",id)
        setTasks(tasks.filter(task => task.id != id) )
        
    }

  return (
    <div>
        <AddTask handleSubmit={handleSubmit} handleName={handleName} name={name} />
        
        <div className="task_section">
            <div className="task_header">
                <h2>Todo <span>{tasks.length
                }</span></h2>
                <button>Clear All</button>
            </div>
            <hr />
            {tasks && tasks.map(task =>
                <ShowTask task={task} handleDelete={handleDelete} />
            )}
        </div>
      
    </div>
  )
}

export default Main
