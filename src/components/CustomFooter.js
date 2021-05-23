import React from 'react';
import '../css/helper.css';
import { Button } from 'react-bootstrap';
import FooterList from './FooterList';
import { listItem } from '../constant';

const CustomFooter = () => {
    return (
        <div className="footer_main" style={{ background: '#19191b', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 text-center my-5">
                        <h1 className="font-weight-bold my-3">Ready to launch?</h1>
                        <p className="m-auto" style={{ width: '30%', color: 'grey', fontSize: 12, lineHeight: 1.8 }}>Are you interested to join our team? Check out our job openings and apply on your suitable role.</p>
                        <Button variant="danger" className="mt-4">Get Omega Now</Button>
                    </div>
                </div>
                <div className="row my-5 py-5">
                    <div className="col-md-4">
                        <h4 className="font-weight-bold">Omega</h4>
                    </div>
                    {listItem.map((element, index) => (<div className="col-md-2" key={"footerList" + index}>
                        <FooterList title={element.title} items={element.items} />
                    </div>))}
                </div>
                <div style={{ height: 0.5, background: '#4d4847', width: '100%' }}></div>
                <div className="pt-3">
                    <p className="m-0" style={{ fontSize: 12, color: 'grey' }}>&#169; UXThemes,All Rights Reserved</p>
                </div>
            </div>
            <div className="oval" style={{ width: '50%', height: '40vh', borderRadius: '50%', background: '#5454d4', position: 'absolute', top: "-25%", left: '-20%' }}>
            </div>
        </div>
    );
}

export default CustomFooter;