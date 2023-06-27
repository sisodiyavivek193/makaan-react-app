import React, { useEffect } from 'react';
import PropertyCompo from '../Component/PropertyCompo';
import FindCompo from '../Component/FindCompo';
import PropartyListingCompo from '../Component/PropartyListingCompo';
import ContactCompo from '../Component/ContactCompo';
import PropartyAgent from '../Component/PropartyAgent';
import OurClintents from '../Component/OurClintents';
import BackToTopComponent from '../CommonComponent/BackToTopComponent';

const Home = () => {

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "auto" })
    }, []);



    return (
        <>
            <PropertyCompo />
            <FindCompo />
            <PropartyListingCompo />
            <ContactCompo />
            <PropartyAgent />
            <OurClintents />
            <BackToTopComponent />
            {/* <h3>Home</h3> */}
        </>
    );
};

export default Home;