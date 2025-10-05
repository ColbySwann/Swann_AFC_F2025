import menuItems from "../data/menu.json"
import MenuTable from "../components/MenuTable.jsx";
import {Container} from "reactstrap";

const MenuPage = () => {

    return (
        <div className="page-menu">
            <Container className="" >
                <h2 className="mb-1 bg-dark text-center">Our Timeless Menu</h2>
                <MenuTable items={menuItems} />
            </Container>
        </div>
    );


}
export default MenuPage;