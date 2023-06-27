import React from 'react';
import PropertyChlid from './PropertyChlid.jsx';


const PropertyCompo = () => {
    return (
        <>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="mb-3 proparty-heading Font ">Property Types</h1>
                        <p className="color">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="/img/icon-apartment.png" heading="Apartment" />
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-villa.png" heading="Villa" />
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-house.png" heading="Home" />
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-housing.png" heading="Office" />
                        </div>
                        <div className="col-lg-3 mt-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-building.png" heading="building" />
                        </div>
                        <div className="col-lg-3 mt-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-neighborhood.png" heading="Townhouse" />
                        </div>
                        <div className="col-lg-3 mt-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-condominium.png" heading="shop" />
                        </div>
                        <div className="col-lg-3 mt-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PropertyChlid imgsrc="img/icon-luxury.png" heading="Garage" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default PropertyCompo;