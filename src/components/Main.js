import { useState } from "react";

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
        <form onSubmit={handleSubmit} className="addTask">
            <input type="text" placeholder="Task" onChange={handleName} value={name} />
            <button type="submit" className="addBtn">Save</button>
        </form>
        <div className="task_section">
            <div className="task_header">
                <h2>Todo <span>{tasks.length}</span></h2>
                <button>Clear All</button>
            </div>
            <hr />
            {tasks && tasks.map(task =>
            <div className="task_plate" key={task.id}>
                <div className="task_name">
                    <h3>{task.name}</h3>
                    <p>Time and Date</p>                    
                </div>
                <div className="task_actions">
                    <span>Edit</span>
                    <span onClick={()=>handleDelete(task.id)}>Delete</span>
                </div>
            </div>
            )}
        </div>
      
    </div>
  )
}

export default Main
