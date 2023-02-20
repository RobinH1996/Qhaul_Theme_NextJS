import Link from 'next/link';
import React from 'react';

const HurryupBanner = () => {
    return (
        <>
            <div className="col-xl-5 col-lg-6">
                <div className="bd-singel__product-banner product-thumb-bg mb-70" style={{ backgroundImage: "url(assets/img/product/banner/product-banner-09.jpg)" }}>
                    <div className="bd-product__banner-inner">
                        <div className="bd-product__banner-content banner-food  product__content-2">
                            <span>Fresh and pure</span>
                            <h3><Link href="/shop"><a>Food and Fruits</a></Link></h3>
                            <p>Feed your family fresh</p>
                            <Link href="/shop"><a className="bd-bn__btn-3">Shop Now</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-7 col-lg-6">
                <div className="bd-singel__product-banner product-thumb-bg mb-70" style={{ backgroundImage: "url(assets/img/product/banner/product-banner-10.jpg)" }}>
                    <div className="bd-product__banner-inner">
                        <div className="bd-product__spacial-banner text-center">
                            <h3>Hurry up!</h3>
                            <div className="discount__button-wrapper">
                                <span className="discount-btn"><span>50%</span> OFF</span>
                                <span className="discount__end-btn">Ends in</span>
                            </div>
                            <div className="count-down__style-2">
                                <div className="bd-countdown-wrapper">
                                    <div className="bd-product__countdown in-art-item" data-countdown="2022/12/25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HurryupBanner;