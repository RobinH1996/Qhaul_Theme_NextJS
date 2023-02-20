import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import productList from '../../../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProducts } from '../../../redux/features/product-slice';
import { cart_product } from '../../../redux/features/cart-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import ProductModal from '../../common/product-modal';

const TrendingProductSlider = ({trending_product_title}) => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <div className="row">
                <div className="col-xxl-4 col-xl-5 col-lg-4">
                    <div className="bd-section__title-wrapper mb-40">
                        <div className="bd-sm__section-title">
                            <h3>{trending_product_title ? trending_product_title : 'You May Missed'}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-8 col-xl-7 col-lg-8">
                    <div className="bd-trending__tab-wrapper mb-40 p-relative">
                        <div className="bd-tending-nav">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-tab-1-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-1" type="button" role="tab" aria-controls="nav-tab-1" aria-selected="true">View All</button>
                                    <button className="nav-link" id="nav-tab-2-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-2" type="button" role="tab" aria-controls="nav-tab-2" aria-selected="false">New Arrival</button>
                                    <button className="nav-link" id="nav-tab-3-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-3" type="button" role="tab" aria-controls="nav-tab-3" aria-selected="false">Best Sale</button>
                                    <button className="nav-link" id="nav-tab-4-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-4" type="button" role="tab" aria-controls="nav-tab-4" aria-selected="false">Featured</button>
                                </div>
                            </nav>
                        </div>
                        <div className="bd-trending__navigation">
                            <button className="trending-button-prev"><i className="fa-regular fa-angle-left"></i></button>
                            <button className="trending-button-next"><i className="fa-regular fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-trending__item-wrapper">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-tab-1" role="tabpanel" aria-labelledby="nav-tab-1-tab">
                        <div className="bd-trending-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.trending-button-next',
                                        prevEl: '.trending-button-prev',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                >
                                    {productList.slice(27, 32).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="bd-trending__item text-center mb-30">
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-tab-2" role="tabpanel" aria-labelledby="nav-tab-2-tab">
                        <div className="bd-trending-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.trending-button-next',
                                        prevEl: '.trending-button-prev',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                >
                                    {productList.slice(32, 37).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="bd-trending__item text-center mb-30">
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-tab-3" role="tabpanel" aria-labelledby="nav-tab-3-tab">
                        <div className="bd-trending-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.trending-button-next',
                                        prevEl: '.trending-button-prev',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                >
                                    {productList.slice(37, 43).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="bd-trending__item text-center mb-30">
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-tab-4" role="tabpanel" aria-labelledby="nav-tab-4-tab">
                        <div className="bd-trending-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.trending-button-next',
                                        prevEl: '.trending-button-prev',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                >
                                    {productList.slice(34, 41).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="bd-trending__item text-center mb-30">
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal />
        </>
    );
};

export default TrendingProductSlider;