import {Navbar} from "reactstrap";
import AppNavbar from "../components/AppNavbar.jsx";


const ErrorPage = () => {
    return(
        <>
            <AppNavbar />
            <h1>Oops! Something Went Wrong</h1>
            <p>Hit the home button to return</p>
        </>
    )



}

export default ErrorPage;