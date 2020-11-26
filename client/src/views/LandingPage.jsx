import React from 'react';
import JumboSection from '../components/jumbotron/Jumbotron.jsx';
import AboutUs from '../components/aboutComponents/aboutUs';
import HomeImage from '../components/homeComponents/homeImage';

function LandingPage() {
    return (
        <>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <AboutUs />
            <HomeImage />
        </>

    )
}

export default LandingPage;