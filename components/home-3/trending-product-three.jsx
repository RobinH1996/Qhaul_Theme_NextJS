import React from 'react';
import BrowseProductSlider from '../elements/product/browse-product-slider';
import TrendingProductSlider from '../elements/product/trending-product-slider';
import FlashBanner from '../home-2/flash-banner';
import BrowseProductBanner from './browse-product-banner';
import HurryupBanner from './hurryup-banner';
import MasalaProductBanner from './masala-product-banner';
import ShippingInfo from './shipping-info';
import SidebarTopratedProduct from './sidebar-toprated-product';

const TrendingProductThree = () => {
    return (
        <section className="bd-product__trending-area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 mb-45">
                                <TrendingProductSlider trending_product_title="Trending Product" />
                            </div>
                            <HurryupBanner />
                            <BrowseProductSlider />
                            <BrowseProductBanner />
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="bd-product__sidebar pb-40">
                                    <div className="col-xl-12 col-lg-6">
                                        <MasalaProductBanner />
                                    </div>
                                    <div className="col-xl-12 col-lg-6">
                                        <ShippingInfo />
                                    </div>
                                    <div className="col-xl-12 col-lg-6">
                                        <FlashBanner />
                                    </div>
                                    <div className="col-xl-12 col-lg-6">
                                        <SidebarTopratedProduct />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingProductThree;