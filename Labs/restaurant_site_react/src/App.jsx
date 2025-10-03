import React from "react";
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './pages/Splash'
import MenuPage from './pages/MenuPage'
import Hiring from './pages/Hiring'
import Navbar from './components/AppNavbar';
import NavBar from "./components/AppNavbar";

function App() {
  return (
    <>
        <NavBar />

        <div>
            <Outlet />
        </div>
    </>

  )
}

export default App
