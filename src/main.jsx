import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AutProvider from './Provider/AutProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutProvider>
      <RouterProvider router={router}></RouterProvider>
    </AutProvider>
  </React.StrictMode>
);
