import { ref, set } from "firebase/database"
import { useState } from "react"
import { uid } from "uid"
import { auth, db } from "../../firebase"


const TodoPage = () => {

  // const [input, setInput] = useState("")
  const [todo, setTodo] = useState("")

  const createTodo = (e) => {
e.preventDefault()
    const todoId = uid(); // Generate a unique ID for the todo
    set(ref(db, `todos/${auth.currentUser.uid}/${todoId}`), {
      todo,
      uid: todoId,
    })
    setTodo("")

  }



  // create todo




  // get todo from firebase



  // update todo


  // delete todo



  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-container bg-white p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">

            <h1 className="text-3xl text-black font-bold uppercase">Todo list pro</h1>
          </div>
          <div className="todo-body ">
            <form onSubmit={(e)=> createTodo(e) } className=' flex gap-2 '>
              <input value={todo} onChange={(e => setTodo(e.target.value))} type="text" placeholder='Add todo' className=' w-full p-3 bg-transparent text-black border border-black' />
              <button>Add</button>
            </form>
          </div>

        </div>
        <div className="todo-container bg-white mt-3 p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">
            <ul className=' flex flex-col gap-2'>

            </ul>
          </div>


        </div>
        <div className="todo-count text-black mt-2">
          <p> you have  todos</p>
        </div>
      </div>
    </>
  )
}

export default TodoPage