import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import CheckoutSection from './checkout-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Checkout'} />
                <CheckoutSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;