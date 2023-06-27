import React, { useEffect } from 'react';
// import WOW from 'wowjs';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OurClintents = () => {


    // useEffect(() => {
    //     new WOW.WOW({
    //         live: false
    //     }).init();
    // }, [])

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        // fade: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],


    };


    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5">
                        <h1 className="mb-3 proparty-heading Font">Our Clients Say!</h1>
                        <p className="color" style={{ maxWidth: "50%", margin: "0 auto" }}>
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                            dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
                            rebum vero dolor duo.
                        </p>
                    </div>

                    <Slider  {...settings} >

                        <div className=" bg-light rounded p-3 " >
                            <div className="bg-white border rounded p-4">
                                <p className="color">
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                                    ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est
                                    kasd kasd erat eos
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded"
                                        src="img/testimonial-1.jpg"
                                        alt="Client Image"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1 proparty-heading">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                                    ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est
                                    kasd kasd erat eos
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded"
                                        src="img/testimonial-1.jpg"
                                        alt="Client Image"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                                    ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est
                                    kasd kasd erat eos
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded"
                                        src="img/testimonial-2.jpg"
                                        alt="Client Image"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>
                                    Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                                    ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est
                                    kasd kasd erat eos
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="img-fluid flex-shrink-0 rounded"
                                        src="img/testimonial-3.jpg"
                                        alt="Client Image"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default OurClintents;