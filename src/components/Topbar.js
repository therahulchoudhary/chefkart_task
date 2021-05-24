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
                    <Link className="font-weight-bold px-4" to={'/'}>Home</Link>
                    <Link className="font-weight-bold px-4" to={'/form'}>Form</Link>
                    <Link className="font-weight-bold px-4" to={'/list'}>List</Link>
                    <Nav.Link><Button className="primary_button py-2 px-4">Get Started</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;