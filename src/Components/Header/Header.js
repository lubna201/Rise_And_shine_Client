import React from 'react';
import './Header.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="./home">RISE <span className="text-design">AND SHINE </span>GROCERY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="./home">Home</Nav.Link>
                    <Nav.Link href="./home">Orders</Nav.Link>
                    <Nav.Link href="./addProducts">Admin</Nav.Link>
                    <Nav.Link href="./home">Deals</Nav.Link>
                    <Nav.Link href="./login"><Button variant="warning">Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;