import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

import Splash from "./pages/Splash";
import MenuPage from "./pages/MenuPage";
import Hiring from "./pages/HiringPage.jsx"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([{
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {path: "splash", element: <Splash />},
        {path: "menu", element: <MenuPage />},
        {path: "hiring", element: <Hiring />},
        {index: true, element: <Splash />}
    ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
