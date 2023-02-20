import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import ShopSection from './shop-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Shop'} />
                <ShopSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;