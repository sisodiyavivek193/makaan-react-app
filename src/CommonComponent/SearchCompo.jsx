import React, { useEffect } from 'react';
import WOW from 'wowjs';


const SearchCompo = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <div>
            <div className="container-fluid contact_first  bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
                <div className="container">
                    <div className="row g-2 ">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option readOnly>Property Type</option>
                                        <option >Property Type 1</option>
                                        <option >Property Type 2</option>
                                        <option >Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option readOnly>Location</option>
                                        <option >Location 1</option>
                                        <option >Location 2</option>
                                        <option >Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3 contact_bg">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCompo;