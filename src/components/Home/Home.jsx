import { onAuthStateChanged, signOut } from 'firebase/auth'
import  { useContext, useEffect } from 'react'
import { auth } from '../../firebase.js'
import { useNavigate } from "react-router-dom"
import UserContext from '../../context/UserContext.js'


const Home = () => {
  const navigate = useNavigate()
  const {input} = useContext(UserContext)
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if (!user) {
        navigate("/login")
      }
    })
  
  }, [])
  

  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      navigate("/login")
    }).catch(err => {err.message})
  }

  return (
    <div>Home
      <h1 className=' text-cyan-50 '>{input.username}</h1>
    <button onClick={handleLogout}>Log Out</button>

    </div>
  )
}

export default Home