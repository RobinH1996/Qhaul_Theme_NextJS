import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import CategorySlider from '../elements/product/category-slider';
import BlogSection from '../home/blog-section';
import HeroSectionThree from './hero-section-three';
import NewsletterSection from './newsletter-section';
import TrendingProductThree from './trending-product-three';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <HeroSectionThree />
                <CategorySlider />
                <TrendingProductThree />
                <NewsletterSection />
                <BlogSection />
            </main>
            <FooterThree />
        </>
    );
};

export default index;