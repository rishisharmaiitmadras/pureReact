import { StrictMode } from 'react'
import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Layout from "./Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About";

const router =createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element:< About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />

  </React.StrictMode>,
)
