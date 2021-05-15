import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/helper.css';

const Bottombar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="bottom" className="bottom_bar">
            <div className="bottom_options">
                <div className="option_detail active_tab">
                    <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                    <p className="option_heading">Home</p>
                </div>
                <div className="option_detail">
                    <i className="fa fa-compass fa-lg" aria-hidden="true"></i>
                    <p className="option_heading">Explore</p>
                </div>
                <div className="option_detail">
                    <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
                    <p className="option_heading">Support</p>
                </div>
            </div>
        </Navbar>
    );
}

export default Bottombar;