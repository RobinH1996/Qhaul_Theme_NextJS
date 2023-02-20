import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import BlogGridSection from './blog-grid-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Blog Grid'} />
                <BlogGridSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;