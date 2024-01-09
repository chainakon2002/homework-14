import { useState } from "react"
import useTodo from "../hooks/useTodo"

function FormAddTodo() {
  const {hdlAdd} = useTodo()
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()  
    let newJob = { todo: input, completed: false, user: 1 }
    hdlAdd(newJob)
  }

  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input className="input1" value={input} onChange={e=>setInput(e.target.value)} />
      <button className="btn-hover1 color-13" type="submit">Add</button>
    </form>
  )
}

export default FormAddTodo