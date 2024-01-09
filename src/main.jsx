import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from "@material-tailwind/react";
import UserProvider from './provider/UserProvider.jsx';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(


  <UserProvider>


    <App />
  </UserProvider>


)
