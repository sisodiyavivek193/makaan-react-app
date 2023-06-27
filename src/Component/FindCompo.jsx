import React from 'react';
import { Link } from 'react-router-dom';

const FindCompo = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src="img/about.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4 proparty-heading Font">#1 Place To Find The Perfect Property</h1>
                            <p className="mb-4 color">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="color"><i className="fa-solid fa-check  me-3" style={{ color: " #009b8e" }}></i>Tempor erat elitr rebum at clita</p>
                            <p className="color"><i className="fa-solid fa-check  me-3" style={{ color: " #009b8e" }}></i>Aliqu diam amet diam et eos</p>
                            <p className="color"><i className="fa-solid fa-check  me-3" style={{ color: " #009b8e" }}></i>Clita duo justo magna dolore erat amet</p>
                            <Link className="btn btn-primary py-3 px-5 mt-4 contact_first " to="">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FindCompo;