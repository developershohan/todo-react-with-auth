import { useState } from "react"
import UserContext from "../context/UserContext"

const UserProvider = ({ children}) => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  })
  return (
    <UserContext.Provider value={{ input, setInput }} >{children}</UserContext.Provider>
  )
}

export default UserProvider