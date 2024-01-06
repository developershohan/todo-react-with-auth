// useTodos.js
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { auth, db } from '../firebase';


const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching todos:', error.message);
      } finally {
        setLoadings(false);
      }
    };

    fetchData();
  }, []);

  return { todos, loadings };
};

export default useTodos;
