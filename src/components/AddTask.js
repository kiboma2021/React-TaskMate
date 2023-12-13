import React from 'react'

const AddTask = ({handleSubmit,handleName,name}) => {
  return (
    <form onSubmit={handleSubmit} className="addTask">
        <input type="text" placeholder="Task" onChange={handleName} value={name} />
        <button type="submit" className="addBtn">Save</button>
    </form>
  )
}

export default AddTask
