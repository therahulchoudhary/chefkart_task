import React from 'react';
import { Navbar } from 'react-bootstrap';

const Topbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="top_bar">
            <div className="topbar_body">
                <div>
                    <i className="fa fa-bars fa-lg pr-3" aria-hidden="true"></i>
                    <span className="logo_heading">ChefKart</span>
                </div>
                <div>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </Navbar>
    );
}

export default Topbar;