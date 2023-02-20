import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productList from '../../data/products';
import { cart_product } from '../../redux/features/cart-slice';
import { getSingleProduct, selectProducts } from '../../redux/features/product-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import Pagination from '../common/pagination';
import ProductModal from '../common/product-modal';
import GridIcon from '../elements/icons/grid-icon';
import ListIcon from '../elements/icons/list-icon';
import FlashBanner from '../home-2/flash-banner';
import ShopSidebarCategories from './shop-sidebar-categories';
import ShopSidebarRatings from './shop-sidebar-ratings';

const ShopSection = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <section className="bd-shop__area pt-115 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-4">
                            <div className="bd-sidebar__widget-warpper mb-60">
                                <div className="bd-product__filters">
                                    <ShopSidebarCategories />
                                    <ShopSidebarRatings />
                                    <FlashBanner />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-8 col-lg-8">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="bd-top__filter-search p-relative mb-30">
                                        <form className="bd-top__filter-input" action="#">
                                            <input type="text" placeholder="Search keyword..." />
                                            <button><i className="fa-regular fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="bd-filter__tab-inner mb-30">
                                        <div className="bd-top__filter">
                                            <div className="bd-Product__tab pl-5">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><GridIcon /></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="shop-filter-bar" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><ListIcon /></button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd-sort__type-filter">
                                            <select className="sorting-list" name="sorting-list" id="sorting-list">
                                                <option defaultValue="1">Default</option>
                                                <option defaultValue="2">Newly published</option>
                                                <option defaultValue="3">Most popular</option>
                                                <option defaultValue="4">Trending</option>
                                                <option defaultValue="5">Featured</option>
                                                <option defaultValue="6">Discounted</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="bd-shop__wrapper">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="bd-trending__item-wrapper">
                                                    <div className="row">
                                                        {productList.slice(62, 74).map((item, index) => (
                                                            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
                                                                <div className="bd-trending__item text-center mb-30 position-relative">
                                                                    <div className="bd-trending__product-thumb border-5">
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
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="shop-filter-bar">
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        {productList.slice(74, 83).map((item, index) => (
                                                            <div className="bd-grid__singel-item mb-30" key={index}>
                                                                <div className="row align-items-center">
                                                                    <div className="col-xxl-4 col-lg-6 col-md-6">
                                                                        <div className="bd-trending__item">
                                                                            <div className="bd-trending__product-thumb text-center">
                                                                                <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-8 col-lg-6 col-md-6">
                                                                        <div className="bd-teanding__content mb-25">
                                                                            <div className="bd-product__content mb-10">
                                                                                <h4 className="bd-product__title" ><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
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
                                                                            <p className="mb-25">{item.productDesc}</p>

                                                                            <div className="bd-product__action-btn">
                                                                                <span className="cart-btn bd-add__cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}>{item.cartIcon}</span>

                                                                                <span className='bd-cart__btn bd-add__cart-btn' data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>

                                                                                <span className="wishlist-btn bd-add__cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xxl-12">
                                    <Pagination Pagination_space="d-flex justify-content-center mt-40  mb-45" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductModal />
        </>
    );
};

export default ShopSection;