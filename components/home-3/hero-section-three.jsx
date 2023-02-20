import Link from 'next/link';
import React from 'react';
import productList from '../../data/products';
import HeroSliderThree from '../elements/hero/hero-slider-three';

const HeroSectionThree = () => {
    return (
        <section className="bd-banner__area pt-30 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="row">
                            {productList.slice(54, 56).map((item, index) => (
                                <div className="col-xl-12 col-md-6" key={index}>
                                    <div className="bd-singel__product-banner product-thumb-bg mb-30" style={{ backgroundImage: `url(${item.productImg})` }}>
                                        <div className="bd-product__banner-inner">
                                            <div className={item.bannerClass}>
                                                <span>{item.productTag}</span>
                                                <h3 className="bd-product__title" ><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h3>
                                                <div className="product__banner-price">
                                                    <span>{item.productDesc}</span>
                                                    <h4>${item.price}</h4>
                                                </div>
                                                <Link href={`/shop-details/${item.id}`}><a className="bd-bn__btn-3">Shop Now</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <HeroSliderThree />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionThree;