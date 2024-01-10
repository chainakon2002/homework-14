import useTodo from "../hooks/useTodo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons' 

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
        <a className="but-2" onClick={()=>{setEditId(job.id)}}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></a>
        <a className="but-3" onClick={onDelete}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></a>
      </div>
    </div>
  
  )
}

export default TodoItem