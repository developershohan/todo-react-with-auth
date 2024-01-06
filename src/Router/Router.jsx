import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import NotMatch from "../components/NotMatch/NotMatch";


const router = createBrowserRouter([
    

            {
                path: "/",
                element: <Home/>
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
                path: "*",
                element: <NotMatch/>
            }
        
    
])

export default router