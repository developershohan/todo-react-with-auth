
import { ref, remove, update } from "firebase/database";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { auth, db } from "../firebase";
import { useState } from "react";
import { createToast } from "../helper/helpers";

const style = {
  li: `flex align-middle justify-between text-center w-full  p-3 bg-slate-200 `,
  liComplete: `flex align-middle justify-between text-center w-full  p-3 bg-slate-400 `,
  text: `text-wrap text-xl w-full text-start`,
  textCompleted: `text-wrap text-xl w-full text-start line-through`
}


const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleDelete = (uid) => {
    remove(ref(db, `todos/${auth.currentUser.uid}/${uid}`));
    createToast("delete successful", "success")
  };

  const handleToggleComplete = () => {
    update(ref(db, `todos/${auth.currentUser.uid}/${todo.uid}`), {
      completed: !todo.completed,
    });
    if (!todo.completed) {
      
      createToast("Marked as Completed", "success")
    }

  };

  const handleEditStart = () => {
    setEditing(true);
  };

  const handleEditFinish = () => {
    update(ref(db, `todos/${auth.currentUser.uid}/${todo.uid}`), {
      todo: editedTodo,
    });
    createToast("Todo edited Successfully", "success")


    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTodo(e.target.value);

  };

  return (
    <div>
      <li className={todo.completed ? style.liComplete : style.li}>
        <div className="todo-list-container text-black flex items-center gap-3 cursor-pointer w-full">
          <input
            className="cursor-pointer size-4 "
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          {editing ? (
            // Render input field for editing
            <input
              value={editedTodo}
              onBlur={handleEditFinish}
              onChange={handleInputChange}
              className={style.text}
            />
          ) : (
            // Render todo text
            <p onDoubleClick={handleEditStart} className={todo.completed ? style.textCompleted : style.text}>
              {todo.todo}
            </p>
          )}
        </div>
        <div className=" flex gap-2">
          <button
            onClick={handleEditStart}
            className="p-2 rounded-md bg-cyan-500 text-white text-xl border-0 focus:outline-0"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={() => handleDelete(todo.uid)}
            className="p-2 rounded-md bg-red-700 text-white text-md border-0 focus:outline-0"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </li>
    </div>
  );
};


export default Todo