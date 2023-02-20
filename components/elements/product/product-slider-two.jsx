import Link from 'next/link';
import React from 'react';
import MasalaProductBanner from '../../home-3/masala-product-banner';
import TrendingProductSlider from './trending-product-slider';

const ProductSliderTwo = () => {
    return (
        <section className="bd-trending__area pb-10">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                        <MasalaProductBanner />
                    </div>
                    <div className="col-xxl-9 col-xl-8 col-lg-8">
                        <TrendingProductSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSliderTwo;