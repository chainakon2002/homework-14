import useTodo from "../hooks/useTodo"

function TodoItem(props) {
  const {job, setEditId} = props
  const {hdlDel} = useTodo()

  const onDelete = () => {
    if(confirm('Delete this item?')) { hdlDel(job.id) }
  }
  return (
    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <a className="but-2" onClick={()=>{setEditId(job.id)}}>แก้ไข</a>
        <a className="but-3" onClick={onDelete}>ลบ</a>
      </div>
    </div>
  )
}

export default TodoItem