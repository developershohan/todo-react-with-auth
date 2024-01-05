import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../components/TodoPage/TodoPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import NotMatch from "../components/NotMatch/NotMatch";


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
            ,
            {
                path: "/home",
                element: <Home/>
            }
            ,
            {
                path: "*",
                element: <NotMatch/>
            }
        
    
])

export default router