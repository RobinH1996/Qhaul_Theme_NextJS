import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderTwo from '../../layout/headers/header-two';
import BrandSlider from '../elements/brand/brand-slider';
import ProductSliderTwo from '../elements/product/product-slider-two';
import BlogSection from '../home/blog-section';
import BannerSection from './banner-section';
import CategorySection from './category-section';
import FeatureSection from './feature-section';
import HeroSectionTwo from './hero-section-two';
import TrendingProducts from './trending-products';


const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroSectionTwo />
                <FeatureSection />
                <BannerSection />
                <ProductSliderTwo />
                <CategorySection />
                <TrendingProducts />
                <BrandSlider />
                <BlogSection />
            </main>
            <FooterOne />
        </>
    );
};

export default index;