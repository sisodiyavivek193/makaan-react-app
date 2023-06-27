import React from 'react';
import PropartyListingChild from './PropartyListingChild.jsx';
import { Link } from 'react-router-dom';

const PropartyListingCompo = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3 proparty-heading Font">Property Listing</h1>
                                <p className="color">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>

                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <PropartyListingChild imgsrc="/img/property-1.jpg" heading="Appartment" />
                                </div>
                                <div className="col-12 mt-5 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <Link className="btn btn-primary py-3 mt-3 px-5 contact_first" to="">Browse More Property</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropartyListingCompo;