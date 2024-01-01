
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex align-middle justify-between text-center w-full  p-3 bg-slate-200 `,
  liComplete: `flex align-middle justify-between text-center w-full  p-3 bg-slate-400 `,
  text: `text-wrap text-xl capitalize w-full text-start`,
  textCompleted: `text-wrap text-xl capitalize w-full text-start line-through`
}


const Todo = ({todo, toggleComplete,deletetodo}) => {
  return (
    <div>
        
        <li className={ todo.completed ? style.liComplete : style.li }>
            <div className="todo-list-container text-black flex items-center gap-3 cursor-pointer w-full">
                <input onChange={()=>toggleComplete(todo)} className=' cursor-pointer size-4' type="checkbox" checked={todo.completed ? 'checked' : ''}/>
                <p onClick={()=>toggleComplete(todo)} className={todo.completed ? style.textCompleted : style.text}>{todo.text}</p>
            </div>
            <button onClick={()=>deletetodo(todo.id)} className=' p-0 bg-transparent text-black text-xl border-0 focus:outline-0'> <FaRegTrashAlt/> </button>
        </li>
       
    </div>
  )
}

export default Todo