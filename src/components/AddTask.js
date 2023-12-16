const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const date = new Date();

  function handleSubmit(e){
      e.preventDefault();

      if (task.id){
        console.log(task.id);
        const date = new Date();
        const updatedTaskList = taskList.map((todo)=>(
          todo.id === task.id?{id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo 
        ));
        setTaskList(updatedTaskList);

      } else {
        const taskid= Math.floor(Math.random()*10000)
        const new_task = {
            id: taskid,
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
  
        }
        setTaskList([...taskList, new_task]);
      }
      setTask({});
  }

  return (
    <form onSubmit={handleSubmit} className="addTask">
        <input type="text" placeholder="Task" maxLength={255} name="task" value={task.name || ""} onChange={e => setTask({...task,name:e.target.value})} />
        <button type="submit" className="addBtn">{task.id?"Update":"Add"}</button>

    </form>
  )
}

export default AddTask
