import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchCompo from '../CommonComponent/SearchCompo';

const HeaderComponent = () => {
    const [isopen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isopen);
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`container-fluid nav-bar ${isSticky ? 'sticky-top' : ''} bg-transparent`}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <Link to="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img
                                className="img-fluid"
                                src="/img/icon-deal.png"
                                alt="Icon"
                                style={{ width: "30px", height: "30px" }}
                            />
                        </div>
                        <h1 className="m-0 text-primary Font">Makaan</h1>
                    </Link>
                    <button
                        type="button"
                        className={`navbar-toggler text-dark  ${isopen ? 'collapsed' : ''}`}
                        onClick={toggleCollapse}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className={`collapse navbar-collapse ${isopen ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active_link' : 'nav-link')}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className=" nav-link " activClassName="active">
                                About
                            </NavLink>
                            <NavLink to="/proparty" className=" nav-link" activClassName="active">
                                Property
                            </NavLink>
                            <NavLink to="/testimonial" className=" nav-link" activClassName="active">
                                Testimonial
                            </NavLink>
                        </div>

                    </div>
                </nav>
            </div>



            {/* <!-- Header Start --> */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 nav-txt animated fadeIn mb-4 Font">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                        <p className="animated fadeIn mb-4 pb-2 Font color">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <Link to="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn contact_first">Get Started</Link>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}

            <SearchCompo />
        </>
    );
};

export default HeaderComponent;

