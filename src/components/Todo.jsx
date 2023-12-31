
import { FaRegTrashAlt } from "react-icons/fa";


const Todo = () => {
  return (
    <div>
        
        <li className=' flex align-middle justify-between text-center w-full bg-slate-200 p-3'>
            <div className="todo-list-container text-black flex items-center gap-3 cursor-pointer w-full">
                <input className=' cursor-pointer size-4' type="checkbox" />
                <p className=' text-wrap text-xl capitalize w-full text-start'>demasdfasdfasdfa</p>
            </div>
            <button className=' p-0 bg-transparent text-black text-xl border-0 focus:outline-0'> <FaRegTrashAlt/> </button>
        </li>
        <div className="todo-count text-black mt-2">
            <p> You have 2 todos</p>
        </div>
    </div>
  )
}

export default Todo