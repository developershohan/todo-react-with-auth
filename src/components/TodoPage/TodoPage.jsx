import { ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { auth, db } from "../../firebase";
import Todo from "../Todo";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  // Fetch todos from Firebase
  useEffect(() => {
    const todosRef = ref(db, `todos/${auth.currentUser.uid}`);
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const todosArray = Object.values(data);
        setTodos(todosArray);
      } else {
        setTodos([]);
      }
    });
  }, []);

  // Create todo
  const createTodo = (e) => {
    e.preventDefault();
    const todoId = uid();
    set(ref(db, `todos/${auth.currentUser.uid}/${todoId}`), {
      todo,
      uid: todoId,
    });
    setTodo("");
  };

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-container bg-white p-7 border rounded-sm shadow-sm">
          <div className="todo-header mb-3">
            <h1 className="text-3xl text-black font-bold uppercase">Todo list pro</h1>
          </div>
          <div className="todo-body">
            <form onSubmit={(e) => createTodo(e)} className='flex gap-2'>
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder='Add todo'
                className='w-full p-3 bg-transparent text-black border border-black'
              />
              <button className=" text-black border border-black" type="submit">Add</button>
            </form>
          </div>
        </div>
        <div className="todo-container bg-white mt-3 p-7 border rounded-sm shadow-sm">
          <div className="todo-header mb-3">
            <ul className='flex flex-col gap-2'>
              {todos.map((todo) => (
                <Todo key={todo.uid} todo={todo} />
              ))}
            </ul>
          </div>
        </div>
        <div className="todo-count text-black mt-2">
          <p>You have {todos.length} todos</p>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
