import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import ProductModal from '../../common/product-modal';

const SingleProduct = ({ item }) => {
    return (
        <>
            <SwiperSlide key={index}>
                <div className="swiper-slides">
                    <div className="bd-product__item text-center p-relative mb-30">
                        <div className="bd-product__thumb w-img">
                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                            <div className="bd-product__action">
                                <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal"><i className={item.cartEye}></i></span>
                                <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                            </div>
                        </div>
                        <div className="bd-product__content">
                            <h4 className="bd-product__title" ><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
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
                        <div className="bd-product__tag">
                            {item.badgeNew && <span className="tag-text theme-bg">{item.badge}</span>}
                            {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <ProductModal item={item} />
        </>
    );
};

export default SingleProduct;