import Link from 'next/link';
import React from 'react';
import productList from '../../data/products';

const SidebarTopratedProduct = () => {
    return (
        <div className="bd-sidebar__top-rated-area mb-30">
            <div className="bd-top__rated-area">
                <div className="bd-sm__section-title d-flex align-items-center justify-content-between mb-35">
                    <div className="bd-sm__section-title">
                        <h3>Top Rated</h3>
                    </div>
                    <div className="bd-section__arrow">
                        <Link href="/shop"><a>View All<i className="fa-regular fa-arrow-right-long"></i></a></Link>
                    </div>
                </div>
                {productList &&
                    <div className="bd-populer__item-wrapper">
                        {productList.slice(48, 52).map((item, num) => (
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
                }
            </div>
        </div>
    );
};

export default SidebarTopratedProduct;