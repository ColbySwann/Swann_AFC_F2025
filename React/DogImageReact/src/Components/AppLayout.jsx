import {Outlet} from 'react-router-dom'
import NavBar from "./Navbar.jsx";

const AppLayout = () => {
    return(
        <>
            <NavBar />

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout;