import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import FaqForm from './faq-form';
import FaqSection from './faq-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Faq'} />
                <FaqSection />
                <FaqForm />
            </main>
            <FooterThree />
        </>
    );
};

export default index;