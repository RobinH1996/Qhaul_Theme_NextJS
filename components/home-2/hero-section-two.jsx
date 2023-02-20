import Link from 'next/link';
import React from 'react';

const HeroSectionTwo = () => {
    return (
        <section className="bd-banner__area grey-bg banner-height-2 d-flex align-items-center p-relative">
            <div className="bd-banner__shape-1">
                <img src="/assets/img/banner/banner-shape-1.png" alt="banner-shape"/>
            </div>
            <div className="bd-banner__discount-shape">
                <img src="/assets/img/banner/discount-shape.png" alt="discount-shape"/>
                    <div className="discount-text">
                        <span>50%</span>off</div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="bd-singel__banner mt-70 d-flex align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                            <div className="bd-banner__content__wrapper p-relative">
                                <div className="bd-banner__text-shape">
                                    <img src="/assets/img/banner/banner-shape-2.png" alt="banner-shape"/>
                                </div>
                                <div className="bd-banner__btn-shape">
                                    <img src="/assets/img/banner/curved-arrow.png" alt="curved-arrow"/>
                                </div>
                                <div className="bd-banner__content-2">
                                    <h2>Organic <br/> Fresh Food</h2>
                                    <p>Discover organic, sustainable food from our organic farm and <br/> fresh vegetable, and food </p>
                                    <div className="bd-banner__btn">
                                        <Link href="/shop"><a className="bd-bn__btn-1">Shop Now</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="bd-banner__thumb">
                                <img src="/assets/img/banner/banner-3.png" alt="banner-3.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionTwo;