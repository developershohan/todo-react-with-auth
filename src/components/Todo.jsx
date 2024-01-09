
import { ref, remove, update } from "firebase/database";
import { FaRegTrashAlt } from "react-icons/fa";
import { auth, db } from "../firebase";
import { useState } from "react";

const style = {
  li: `flex align-middle justify-between text-center w-full  p-3 bg-slate-200 `,
  liComplete: `flex align-middle justify-between text-center w-full  p-3 bg-slate-400 `,
  text: `text-wrap text-xl capitalize w-full text-start`,
  textCompleted: `text-wrap text-xl capitalize w-full text-start line-through`
}


const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleDelete = (uid) => {
    remove(ref(db, `todos/${auth.currentUser.uid}/${uid}`));
  };

  const handleToggleComplete = () => {
    update(ref(db, `todos/${auth.currentUser.uid}/${todo.uid}`), {
      completed: !todo.completed,
    });
  };

  const handleEditStart = () => {
    setEditing(true);
  };

  const handleEditFinish = () => {
    update(ref(db, `todos/${auth.currentUser.uid}/${todo.uid}`), {
      todo: editedTodo,
    });

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
            className="cursor-pointer size-4"
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
            <p onDoubleClick={handleEditStart} className={style.text}>
              {todo.todo}
            </p>
          )}
        </div>
        <button
          onClick={() => handleDelete(todo.uid)}
          className="p-0 bg-transparent text-black text-xl border-0 focus:outline-0"
        >
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
};


export default Todo