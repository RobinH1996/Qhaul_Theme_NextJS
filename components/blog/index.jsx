import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import BlogListSection from './blog-list-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Blog'} />
                <BlogListSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;