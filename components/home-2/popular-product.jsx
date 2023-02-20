import Link from 'next/link';
import React from 'react';
import productList from '../../data/products';

const PopularProduct = () => {
    return (
        <div className="bd__populer-wrapper">
            {productList &&
                <div className="row">
                    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                        <div className="bd-top__rated-area">
                            <div className="bd-sm__section-title d-flex align-items-center justify-content-between mb-45">
                                <div className="bd-sm__section-title">
                                    <h3>Top Rated</h3>
                                </div>
                                <div className="bd-section__arrow">
                                    <Link href="/shop"><a>View All <i className="fa-regular fa-arrow-right-long"></i></a></Link>
                                </div>
                            </div>
                            <div className="bd-populer__item-wrapper mb-30">
                                {productList.slice(48, 51).map((item, num) => (
                                    <div className="bd-populer__item" key={num}>
                                        <div className="bd-populer__thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="populer-thumb" /></a></Link>
                                        </div>
                                        <div className="bd-populer__info">
                                            <h4 className="bd-product__title"><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
                                            <div className="bd-product__price">
                                                <span className="bd-product__old-price"><del>${item.priceOld}</del></span><span className="bd-product__new-price" >${item.price}</span>
                                            </div>
                                            <div className="bd-product__icon">
                                                <i className={item.ratingA}></i>
                                                <i className={item.ratingB}></i>
                                                <i className={item.ratingC}></i>
                                                <i className={item.ratingD}></i>
                                                <i className={item.ratingE}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                        <div className="bd-top__populer-area">
                            <div className="bd-sm__section-wrapper d-flex align-items-center justify-content-between mb-45">
                                <div className="bd-sm__section-title">
                                    <h3>Popular</h3>
                                </div>
                                <div className="bd-section__arrow">
                                    <Link href="/shop"><a>View All <i className="fa-regular fa-arrow-right-long"></i></a></Link>
                                </div>
                            </div>
                            <div className="bd-populer__item-wrapper mb-30">
                                {productList.slice(51, 54).map((item, num) => (
                                    <div className="bd-populer__item" key={num}>
                                        <div className="bd-populer__thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="populer-thumb" /></a></Link>
                                        </div>
                                        <div className="bd-populer__info">
                                            <h4 className="bd-product__title"><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
                                            <div className="bd-product__price">
                                                <span className="bd-product__old-price"><del>${item.priceOld}</del></span><span className="bd-product__new-price">${item.price}</span>
                                            </div>
                                            <div className="bd-product__icon">
                                                <i className={item.ratingA}></i>
                                                <i className={item.ratingB}></i>
                                                <i className={item.ratingC}></i>
                                                <i className={item.ratingD}></i>
                                                <i className={item.ratingE}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-8">
                        <Link href="/shop"><a>
                            <div className="bd-flash___banner-item mb-30 p-relative">
                                <div className="bd-flash__banner-thumb w-img">
                                    <img src="/assets/img/trending/flash/flash-banner-02.jpg" alt="flash-banner" />
                                </div>
                                <div className="bd-flash__banner-content">
                                    <h4>Freshly</h4>
                                    <h3>Maitta Potato</h3>
                                    <h6>From<span className="price">$9.00</span></h6>
                                </div>
                            </div>
                        </a></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default PopularProduct;