import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { testimonialList } from '../../../data/testimonial-data';

const ProductTestSlider = () => {
    return (
        <div className="col-xl-12 col-lg-12">
            <div className="bd-quite-active swiper-container">
                {testimonialList &&
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
                        >
                            {testimonialList.slice(0,3).map((item, num) => {
                                return (
                                    <SwiperSlide key={num}>
                                        <div className="swiper-slides" >
                                            <div className="bd-trending__quite text-center mb-30">
                                                <div className="bd-trending__quite-thumb">
                                                    <img src={item.icon} alt="trending-quite" />
                                                </div>
                                                <div className="bd-tending__quite-meta">
                                                    <h4>{item.author}</h4>
                                                    <span>{item.designation}</span>
                                                </div>
                                                <div className="bd-trending__quite-text">
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className="bd-trending__quite-icon">
                                                    <i className={item.starA}></i>
                                                    <i className={item.starB}></i>
                                                    <i className={item.starC}></i>
                                                    <i className={item.starD}></i>
                                                    <i className={item.starE}></i>
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
        </div>
    );
};

export default ProductTestSlider;