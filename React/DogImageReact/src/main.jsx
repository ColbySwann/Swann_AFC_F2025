import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import SplashPage from "./Pages/SplashPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import RandomDogPage from "./Pages/RandomDogPage.jsx";
import AppLayout from "./Components/AppLayout.jsx";

const router = createBrowserRouter([{
    path:"/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path: "results", element: <RandomDogPage />},
        {path: "splash", element: <SplashPage />},
        {index: true, element: <SplashPage />}
    ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
