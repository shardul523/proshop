import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="md" data-bs-theme="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link>
                                <FaUser /> User
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
