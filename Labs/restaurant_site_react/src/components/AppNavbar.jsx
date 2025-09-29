import React from "react"
import { Link, NavLink} from 'react-router-dom'


export default function Navbar(){
    return(
        <header className="navbar">
            <Link to="/" className="brand">The Time-Travel Tavern</Link>
            <nav className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/hiring">Apply Now</NavLink>
            </nav>
            <Link to="/menu" className="button">Order Online</Link>
        </header>
    )
}

// <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="index.html" id="nav-image"><img src="images/time-machine.png" alt="Time Machine"></a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link" href="index.html" id="home-button">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link"  href="menu.html" id="menu-button">Menu</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="hiring.html" id="hiring-button">Apply Now</a>
//                 </li>
//             </ul>
//             <span className="navbar-text">
//
//       </span>
//         </div>
//     </div>
// </nav>