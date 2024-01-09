
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import router from "./Router/Router"
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
