import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../components/TodoPage/TodoPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


const router = createBrowserRouter([
    

            {
                path: "/",
                element: <TodoPage/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        
    
])

export default router