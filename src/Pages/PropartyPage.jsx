import React, { useEffect } from 'react';
import PropertyCompo from '.././Component/PropertyCompo';
import BackToTopComponent from '../CommonComponent/BackToTopComponent';

const PropartyPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
    }, []);


    return (
        <>
            <PropertyCompo />
            <BackToTopComponent />
            {/* <h1>PropartyPage</h1> */}
        </>
    );
};

export default PropartyPage;