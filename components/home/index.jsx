import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ProductSlider from '../elements/product/product-slider';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import ChooseSection from './choose-section';
import FactSection from './fact-section';
import HeroSection from './hero-section';
import ServiceSection from './service-section';


const index = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <ProductSlider />
        <ChooseSection />
        <FactSection />
        <BlogSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;