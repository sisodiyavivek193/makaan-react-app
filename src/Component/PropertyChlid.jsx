import React from 'react';
import { Link } from 'react-router-dom';

const PropertyChlid = ({ imgsrc, heading }) => {
    return (
        <>
            <Link className="cat-item d-block bg-light text-center rounded p-3" href="">
                <div className="rounded p-4">
                    <div className="icon mb-3">
                        <img className="img-fluid" src={imgsrc} alt="Icon" />
                    </div>
                    <h6 className=' proparty-heading'>{heading}</h6>
                    <span className=' proparty'>123 Properties</span>
                </div>
            </Link>
        </>
    );
};

export default PropertyChlid;