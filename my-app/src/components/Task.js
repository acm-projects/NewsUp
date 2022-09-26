const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
      </h3>
      <small> {task.Synopsis} </small>
      <p>{task.day}</p>
    </div>
  )
}

export default Task