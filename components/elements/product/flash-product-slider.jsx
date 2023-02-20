import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import productList from '../../../data/products';
import FlashIcon from '../icons/flash-icon';

const FlashProductSlider = () => {
    return (
        <div className="col-xl-12 col-lg-12">
            <div className="bd-section__title-wrapper d-flex align-items-center mb-40">
                <div className="bd-section__title-icon  blink">
                    <FlashIcon />
                </div>
                <div className="bd-sm__section-title">
                    <h3>Flash Sale!</h3>
                </div>
            </div>
            <div className="bd-flash___inner p-relative">
                <div className="bd-flash-active swiper-container">
                    {productList &&
                        <div className="swiper-wrappers">
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true
                                }}
                                navigation={{
                                    clickable: true,
                                    nextEl: '.flash-button-next',
                                    prevEl: '.flash-button-prev',
                                }}
                            >
                                {productList.slice(45, 48).map((item, num) => {
                                    return (
                                        <SwiperSlide key={num}>
                                            <div className="swiper-slides">
                                                <div className="bd-flash__item text-center p-relative mb-30">
                                                    <div className="bd-flash__discount">
                                                        <div className="price">
                                                            <span>{item.discountText}</span>{item.discountOff}</div>
                                                    </div>
                                                    <div className="bd-flash__thumb w-img">
                                                        <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="product-img" /></a></Link>
                                                    </div>
                                                    <div className="bd-flash__content-box">
                                                        <div className="bd-flash__content mb-30">
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
                                                        <div className="count-down__style">
                                                            <div className="bd-countdown-wrapper">
                                                                <div className="bd-product__countdown justify-content-center in-art-item" data-countdown="2023/02/25">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bd-flash__stock">
                                                            <span className="available-text">{item.available}</span>
                                                            <span><span className="available-count" ><Link href="/shop"><a>{item.availableCount}</a></Link></span>{item.stock}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide >
                                    )
                                })}
                            </Swiper>
                        </div>
                    }
                </div>
                <div className="bd-flash__nav">
                    <button className="flash-button-prev"><i className="fa-regular fa-angle-left"></i></button>
                    <button className="flash-button-next"><i className="fa-regular fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default FlashProductSlider;