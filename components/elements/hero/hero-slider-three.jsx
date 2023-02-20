import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import productList from '../../../data/products';

const HeroSliderThree = () => {
    return (
        <div className="bd-banner-active-2 swiper-container">
            <div className="swiper-wrappers">
                <Swiper
                     modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                     spaceBetween={30}
                     effect={"fade"}
                     slidesPerView={1}
                     autoplaydisableoninteraction={"false"}
                     loop={true}
                     autoplay={{
                         delay: 3000,
                         disableOnInteraction: true
                     }}
                    pagination={{
                        clickable: true,
                        el: '.banner-pagination-2',
                    }}
                >
                    {productList.slice(56, 59).map((item, num) => {
                        return (
                            <SwiperSlide key={num}>
                                <div className="swiper-slides">
                                    <div className="bd-singel__product-banner product-thumb-bg-2 mb-30" style={{ backgroundImage: `url(${item.productImg})` }}>
                                        <div className="bd-product__banner-inner  product__content-4">
                                            <div className="bd-product__banner-content">
                                                <h2 data-animation="fadeInLeft" data-delay="1.5s">{item.productTitle}</h2>
                                                <p data-animation="fadeInLeft" data-delay="1.5s">{item.productDesc}</p>
                                                <div data-animation="fadeInLeft" data-delay="1.7s" className="product__banner-price-2">
                                                    <span>{item.productTag}</span>
                                                    <h3>${item.price}</h3>
                                                </div>
                                                <Link href="/shop"><a className="bd-bn__btn-4">Shop Now</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="banner-pagination-2"></div>
            </div>
        </div>
    );
};

export default HeroSliderThree;