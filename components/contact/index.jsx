import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import ContactForm from './contact-form';
import ContactMap from './contact-map';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Contact'} />
                <ContactForm />
                <ContactMap />
            </main>
            <FooterThree />
        </>
    );
};

export default index;