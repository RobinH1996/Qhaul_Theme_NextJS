import React from 'react';
import blogItemsList from '../../data/blogs';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import BlogDetailsArea from './blog-details-area';

const item = blogItemsList[0]

const index = () => {
    return (
        <>
        <HeaderThree />
        <main>
            <Breadcrumb breadHome={'Home'} breadMenu={'Blog Details'} />
            <BlogDetailsArea item={item} />
        </main>
        <FooterThree />
        </>
    );
};

export default index;