import { useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";

const Main = () => {
    const [tasks, setTasks] =useState([]);
    const [name, setName] = useState("");

    function handleName(event){
        setName(event.target.value);
        console.log(name);
    }

    function getCurrentDateTime() {
        const now = new Date();
        
        const options = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        };
      
        const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
      
        return formattedDateTime;
      }

    function handleSubmit(event){
        event.preventDefault();
        const taskid= Math.floor(Math.random()*10000)
        const task = {
            id: taskid,
            name: name,
            time: getCurrentDateTime(),
        }

        console.log(task);

        setTasks([...tasks, task]);
        setName("");
    }

    function handleDelete(id){
        console.log("Clicked.....",id)
        setTasks(tasks.filter(task => task.id !== id) )
        
    }

    function handleEdit(id,name){
        setName(name)
    }

  return (
    <div>
        <AddTask handleSubmit={handleSubmit} handleName={handleName} name={name} />
        
        <div className="task_section">
            <div className="task_header">
                <h2>Todo <span className="show_num">{tasks.length
                }</span></h2>
                <button onClick={()=>setTasks("")}>Clear All</button>
            </div>
            <hr />
            {tasks && tasks.map(task =>
                <ShowTask task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
            )}
        </div>
      
    </div>
  )
}

export default Main
