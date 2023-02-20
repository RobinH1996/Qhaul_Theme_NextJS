import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const BrandSlider = () => {
    return (
        <div className="bd-brand__area grey-bg pt-95 pb-65">
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-12">
                        <div className="bd-brand-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        },
                                        1400: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-01.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-02.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-03.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-04.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-05.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="bd-singel__brand mb-30">
                                                <a href="#"><img src="/assets/img/brand/brand-06.png" alt="brand-thumb" /></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;