import React, { useEffect } from 'react';
import FindCompo from '../Component/FindCompo';
import ContactCompo from '../Component/ContactCompo';
import PropartyAgent from '../Component/PropartyAgent';
import BackToTopComponent from '../CommonComponent/BackToTopComponent';




const About = () => {
    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "auto" })
    }, []);

    return (
        <>
            < FindCompo />
            <ContactCompo />
            <PropartyAgent />
            <BackToTopComponent />

        </>
    );
};

export default About;








