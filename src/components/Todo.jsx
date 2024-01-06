
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex align-middle justify-between text-center w-full  p-3 bg-slate-200 `,
  liComplete: `flex align-middle justify-between text-center w-full  p-3 bg-slate-400 `,
  text: `text-wrap text-xl capitalize w-full text-start`,
  textCompleted: `text-wrap text-xl capitalize w-full text-start line-through`
}


const Todo = ({todo}) => {
  return (
    <div>
        
        <li className={ style.li }>
            <div className="todo-list-container text-black flex items-center gap-3 cursor-pointer w-full">
                <input  className=' cursor-pointer size-4' type="checkbox" />
                <p className={style.text}>{todo.todo}</p>
            </div>
            <button className=' p-0 bg-transparent text-black text-xl border-0 focus:outline-0'> <FaRegTrashAlt/> </button>
        </li>
       
    </div>
  )
}

export default Todo