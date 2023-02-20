import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import AboutTestSlider from '../elements/testimonial/about-test-slider';
import AboutFactSection from './about-fact-section';
import AboutPagetitle from './about-pagetitle';
import AboutSectionTwo from './about-section-two';
import TeamSection from './team-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <AboutPagetitle />
                <AboutSectionTwo />
                <AboutFactSection />
                <AboutTestSlider />
                <TeamSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;