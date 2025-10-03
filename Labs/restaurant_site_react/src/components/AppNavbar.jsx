import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

import Logo from '../assets/images/time-machine.png'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color = "dark" dark expand="md">
                <NavbarBrand className="navbar-brand" href="/Splash"><img src={Logo} alt="Time Machine"/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/Splash">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Menu/">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Hiring">
                                Apply Now
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Reserve Today!</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;