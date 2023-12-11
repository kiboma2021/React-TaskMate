
const Main = () => {
  return (
    <div>
        <div className="addTask">
            <input type="text" placeholder="Task" />
            <button type="submit" className="addBtn">Save</button>
        </div>
        <div className="task_section">
            <div className="task_header">
                <h2>Todo <span> </span></h2>
                <button>Clear All</button>
            </div>
            <hr />
            <div className="task_plate">
                <div className="task_name">
                    <h3>Task Name</h3>
                    <p>Time and Date</p>                    
                </div>
                <div className="task_actions">
                    <span>Edit</span>
                    <span>Delete</span>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Main
