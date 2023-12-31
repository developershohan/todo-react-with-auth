
import './App.css'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-container bg-white p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">

            <h1 className="text-3xl text-black font-bold uppercase">Todo list</h1>
          </div>
          <div className="todo-body ">
            <form action="" className=' flex gap-2 '>
              <input type="text" placeholder='Add todo' className=' w-full p-3 bg-transparent text-black border border-black' />
              <button>Add</button>
            </form>
          </div>

        </div>
        <div className="todo-container bg-white mt-3 p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">
            <Todo/>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
