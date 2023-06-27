import React from 'react';
import { Link } from 'react-router-dom';

const PropartyListingChild = ({ heading, imgsrc }) => {
    return (
        <>

        
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                    <div className="position-relative overflow-hidden">
                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                        <Link to=""><img src={imgsrc} alt="" /></Link>
                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{heading}</div>
                    </div >
                </div>
                <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <Link className="d-block h5 mb-2 proparty-heading" to="">Golden Urban House For Sell</Link>
                    <p>
                        <i className="fa-solid fa-location-dot text-dark me-2"></i>
                        123 Street, New York, USA</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa-solid fa-ruler-combined me-2" style={{ color: "#00b98e" }}></i>1000 Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa-solid fa-bed" style={{ color: " #00b98e" }}></i>3 Bed</small>
                    <small className="flex-fill text-center py-2"><i className="fa-solid fa-bath" style={{ color: "#009b8e" }}></i>2 Bath</small>
                </div>
            </div >

        </>
    );
};

export default PropartyListingChild;