import {useState} from 'react'

const AddTask = ({taskList, setTaskList}) => {
  const [task, setTask] = useState({});

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
      const new_task = {
          id: taskid,
          name: event.target.value,
          time: getCurrentDateTime(),
      }

      console.log(new_task);

      setTaskList([...taskList, new_task]);
      setTask({});
  }

  return (
    <form onSubmit={handleSubmit} className="addTask">
        <input type="text" placeholder="Task" maxLength={255} value={task.name} onChange={(e)=>setTask(e.target.value)} />
        <button type="submit" className="addBtn">Save</button>

    </form>
  )
}

export default AddTask
