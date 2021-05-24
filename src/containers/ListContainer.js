import React from 'react';
import '../css/HomeContainerStyle.css';
import CampaignItem from '../components/CampaignItem';

const ListContainer = () => {
    return (
        <>
            <div className="container-fluid py-5 mt-5" style={{ background: '#F5F7FC' }}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-6 my-3">
                            <CampaignItem />
                        </div>
                        <div className="col-md-6 my-3">
                            <CampaignItem />
                        </div>
                        <div className="col-md-6 my-3">
                            <CampaignItem />
                        </div>
                        <div className="col-md-6 my-3">
                            <CampaignItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListContainer;