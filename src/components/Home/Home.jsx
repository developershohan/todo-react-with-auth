import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase.js'
import { useNavigate } from "react-router-dom"
import UserContext from '../../context/UserContext.js'
import TodoPage from '../TodoPage/TodoPage.jsx'
import useTodos from '../useTodos.js'



const Home = () => {
  const navigate = useNavigate();
  const { input, setInput } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const { todos, loadings } = useTodos();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      } else {
        setInput((prevInput) => ({ ...prevInput, username: user.displayName }));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate, setInput]);


  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    });
  };

  if (loading) {
    // You might want to show a loading indicator while waiting for authentication state
    return <div>Loading...</div>;
  }
  if (loadings) {
    // You might want to show a loading indicator while waiting for authentication state
    return <div>Loadings...</div>;
  }
  return (
    <div>Home
      <TodoPage todos={todos} />
      <h1 className=' text-cyan-50 '>{input.username}</h1>
      <button onClick={handleLogout}>Log Out</button>

    </div>
  )
}

export default Home