import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productList from '../../../data/products';
import { cart_product } from '../../../redux/features/cart-slice';
import { getSingleProduct, selectProducts } from '../../../redux/features/product-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import ProductModal from '../../common/product-modal';

const BrowseProductSlider = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
        <div className="row">
        <div className="col-xxl-4 col-xl-5 col-lg-4">
                <div className="bd-section__title-wrapper mb-40">
                    <div className="bd-sm__section-title">
                        <h3>You May Browse</h3>
                    </div>
                </div>
            </div>
            <div className="col-xxl-8 col-xl-7 col-lg-8">
                <div className="bd-trending-tab-2">
                    <div className="bd-trending__tab-wrapper mb-40">
                        <div className="bd-tending-nav">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab-large" role="tablist">
                                    <button className="nav-link active" id="nav-trending-tab-1-tab" data-bs-toggle="tab" data-bs-target="#nav-trending-tab-1" type="button" role="tab" aria-controls="nav-trending-tab-1" aria-selected="true">View All</button>
                                    <button className="nav-link" id="nav-trending-tab-2-tab" data-bs-toggle="tab" data-bs-target="#nav-trending-tab-2" type="button" role="tab" aria-controls="nav-trending-tab-2" aria-selected="false">New Arrival</button>
                                    <button className="nav-link" id="nav-trending-tab-3-tab" data-bs-toggle="tab" data-bs-target="#nav-trending-tab-3" type="button" role="tab" aria-controls="nav-trending-tab-3" aria-selected="false">Best Sale</button>
                                    <button className="nav-link" id="nav-trending-tab-4-tab" data-bs-toggle="tab" data-bs-target="#nav-trending-tab-4" type="button" role="tab" aria-controls="nav-trending-tab-4" aria-selected="false">Featured</button>
                                </div>
                            </nav>
                        </div>
                        <div className="bd-trending__btn">
                            <Link href="/shop"><a className="bd-bn__btn-2">View All</a></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="tab-content" id="nav-tabContent-2">
                    <div className="tab-pane fade show active" id="nav-trending-tab-1" role="tabpanel" aria-labelledby="nav-trending-tab-1-tab">
                        <div className="bd-trending__item-wrapper mb-15">
                            <div className="row">
                                {productList.slice(32, 40).map((item, index) => (
                                    <div className="col-xxl-3 col-xl-6 col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div className="bd-trending__item text-center mb-30 position-relative">
                                            <div className="bd-trending__product-thumb">
                                                <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                                <div className="bd-product__action">
                                                    <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                    <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>
                                                    <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                                </div>
                                            </div>
                                            <div className="bd-teanding__content">
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
                                                {item.badgeSale && <span className="tag-text color-black yellow-bg">{item.badge}</span>}
                                                {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-trending-tab-2" role="tabpanel" aria-labelledby="nav-trending-tab-2-tab">
                        <div className="row">
                            {productList.slice(27, 33).map((item, index) => (
                                <div className="col-xxl-3 col-xl-6 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="bd-trending__item text-center mb-30 position-relative">
                                        <div className="bd-trending__product-thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                            <div className="bd-product__action">
                                                <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>
                                                <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                            </div>
                                        </div>
                                        <div className="bd-teanding__content">
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
                                            {item.badgeSale && <span className="tag-text color-black yellow-bg">{item.badge}</span>}
                                            {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-trending-tab-3" role="tabpanel" aria-labelledby="nav-trending-tab-3-tab">
                        <div className="row">
                            {productList.slice(32, 37).map((item, index) => (
                                <div className="col-xxl-3 col-xl-6 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="bd-trending__item text-center mb-30 position-relative">
                                        <div className="bd-trending__product-thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                            <div className="bd-product__action">
                                                <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>
                                                <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                            </div>
                                        </div>
                                        <div className="bd-teanding__content">
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
                                            {item.badgeSale && <span className="tag-text color-black yellow-bg">{item.badge}</span>}
                                            {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-trending-tab-4" role="tabpanel" aria-labelledby="nav-trending-tab-4-tab">
                        <div className="row">
                            {productList.slice(37, 43).map((item, index) => (
                                <div className="col-xxl-3 col-xl-6 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="bd-trending__item text-center mb-30 position-relative">
                                        <div className="bd-trending__product-thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                            <div className="bd-product__action">
                                                <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>
                                                <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                            </div>
                                        </div>
                                        <div className="bd-teanding__content">
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
                                            {item.badgeSale && <span className="tag-text color-black yellow-bg">{item.badge}</span>}
                                            {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductModal />
        </>
    );
};

export default BrowseProductSlider;