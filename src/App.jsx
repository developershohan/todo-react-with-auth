
import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import { collection, query, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";


function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')





  // create todo

  const createTodo = async (e) => {
    e.preventDefault()

    if (input === '') {
      alert('Fields cannot be empty')
      return
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false
    });
    setInput('')

  }
  // get todo from firebase

  useEffect(() => {
    const q = query(collection(db, 'todos'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()

  }, [])

  // update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // delete todo

  const deletetodo = async ( id) =>{
    await deleteDoc(doc(db,'todos',id))
  }

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-container bg-white p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">

            <h1 className="text-3xl text-black font-bold uppercase">Todo list</h1>
          </div>
          <div className="todo-body ">
            <form onSubmit={createTodo} className=' flex gap-2 '>
              <input value={input} onChange={(e => setInput(e.target.value))} type="text" placeholder='Add todo' className=' w-full p-3 bg-transparent text-black border border-black' />
              <button>Add</button>
            </form>
          </div>

        </div>
        <div className="todo-container bg-white mt-3 p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">
            <ul className=' flex flex-col gap-2'>

              {todos.map((todo, index) => (
                <Todo key={index} todo={todo} toggleComplete={toggleComplete} deletetodo={deletetodo}/>
              ))}
            </ul>
          </div>


        </div>
        <div className="todo-count text-black mt-2">
          <p> you have {todos.length} todos</p>
        </div>
      </div>
    </>
  )
}

export default App
