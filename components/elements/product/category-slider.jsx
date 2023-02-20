import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import CategoriesList from '../../../data/categories-data';

const CategorySlider = () => {
    return (
        <div className="bd-catergory__area pb-40">
            <div className="container">
                {CategoriesList &&
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-category-active swiper-container">
                                <div className="swiper-wrappers">
                                    <Swiper
                                        modules={[Scrollbar, A11y, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: true
                                        }}
                                        breakpoints={{
                                            400: {
                                                slidesPerView: 2,
                                            },
                                            576: {
                                                slidesPerView: 3,
                                            },
                                            768: {
                                                slidesPerView: 4,
                                            },
                                            992: {
                                                slidesPerView: 5,
                                            },
                                            1200: {
                                                slidesPerView: 6,
                                            },
                                            1400: {
                                                slidesPerView: 8,
                                            }
                                        }}
                                    >
                                        {CategoriesList.slice(0, 8).map((item, num) => {
                                            return (
                                                <SwiperSlide key={num}>
                                                    <div className="swiper-slides">
                                                        <div className="bd-singel__category text-center mb-30">
                                                            <div className="bd-category__img">
                                                                <Link href="/shop"><a><img src={item.categoriesImg} alt="cateegory-img" /></a></Link>
                                                            </div>
                                                            <div className="bd-category__text">
                                                                <span className="bd-category__title">
                                                                    <Link href="/shop"><a>{item.categoriesTitle}</a></Link>
                                                                </span>
                                                                <span className="bd-caregoty__number">{item.categoriesSubtitle}</span>
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
                }
            </div>
        </div>
    );
};

export default CategorySlider;