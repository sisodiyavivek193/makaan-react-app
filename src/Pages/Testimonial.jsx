import React, { useEffect } from 'react';
import OurClintents from '../Component/OurClintents';
import BackToTopComponent from '../CommonComponent/BackToTopComponent';


const Testimonial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
    }, []);

    return (
        <>
            <OurClintents />
            <BackToTopComponent />
        </>
    );
};

export default Testimonial;