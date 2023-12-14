const AddTask = ({taskList, setTaskList}) => {

  const date = new Date();

  function handleSubmit(e){
      e.preventDefault();
      const taskid= Math.floor(Math.random()*10000)
      const new_task = {
          id: taskid,
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`

      }

      console.log(new_task);

      setTaskList([...taskList, new_task]);
      e.target.task.value="";

  }

  return (
    <form onSubmit={handleSubmit} className="addTask">
        <input type="text" placeholder="Task" maxLength={255} name="task" />
        <button type="submit" className="addBtn">Save</button>

    </form>
  )
}

export default AddTask
