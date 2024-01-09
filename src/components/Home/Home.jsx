import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase.js'
import { useNavigate } from "react-router-dom"
import UserContext from '../../context/UserContext.js'
import TodoPage from '../TodoPage/TodoPage.jsx'
import { createToast } from '../../helper/helpers.jsx'




const Home = ({todos}) => {
  const navigate = useNavigate();
  const { input, setInput } = useContext(UserContext);

  const [loading, setLoading] = useState(true);


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
      createToast("You are logged out", "success")

    });
  };

  if (loading) {
    // You might want to show a loading indicator while waiting for authentication state
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className=' text-black-50 text-xl	'>{`Hi, ${input.username}`}</h1>
      <TodoPage todos={todos} />
      <button onClick={handleLogout}>Log Out</button>

    </div>
  )
}

export default Home