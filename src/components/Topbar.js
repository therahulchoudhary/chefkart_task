import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <Navbar bg="white" expand="lg" fixed='top'>
            <Navbar.Brand className="font-weight-bold">Omega</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav inline="true" className="align-items-center">
                    <Nav.Link className="font-weight-bold px-4" active>Demos</Nav.Link>
                    <Link to={'/form'}>Form</Link>
                    <Nav.Link className="font-weight-bold px-4">Support</Nav.Link>
                    <Nav.Link><Button className="btn btn-danger">Get Started</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;