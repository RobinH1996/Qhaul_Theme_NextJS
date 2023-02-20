import Link from 'next/link';
import React from 'react';
import BlogSidebarAbout from './blog-sidebar-about';
import BlogSidebarBlogs from './blog-sidebar-blogs';
import BlogSidebarCategory from './blog-sidebar-category';
import BlogSidebarSearch from './blog-sidebar-search';
import BlogSidebarTags from './blog-sidebar-tags';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Scrollbar, A11y, Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import blogItemsList from '../../data/blogs';
import Pagination from '../common/pagination';

const BlogListSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <div className="bd-news pt-115 pb-100">
            <div className="container small-container">
                {blogItemsList &&
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="blog-main-wrapper mb-30">
                            <div className="row">
                                <div className="col-xl-12 col-lg-6 col-md-12">
                                {blogItemsList.slice(12, 15).map((item, num) => (
                                    <div className="blog-wrapper position-relative mb-30" key={num}>
                                        {!item.video && !item.slider && <div className="blog-thumb ">
                                            <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="news-img" /></a></Link>
                                        </div>}
                                        {item.video && <div className="blog-thumb">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="news-img" /></a></Link>
                                            <span className="play-btn pulse-btn popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                                        </div>}
                                        {item.slider && <div className="blog-thumb">
                                            <div className="blog-img-slide swiper-container">
                                                <div className="swiper-wrappers">
                                                    <Swiper
                                                        modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2500,
                                                            disableOnInteraction: true
                                                        }}
                                                        navigation={{
                                                            clickable: true,
                                                            nextEl: '.blog-button-next',
                                                            prevEl: '.blog-button-prev',
                                                        }}
                                                    >
                                                        {item.blogInnerImg.map((inner, num) => {
                                                            return (
                                                                <SwiperSlide key={num}>
                                                                    <div className="swiper-slides">
                                                                        <Link href={`/blog-details/${item.id}`}><a><img src={inner.innerImg} alt="news-img" /></a></Link>
                                                                    </div>
                                                                </SwiperSlide>
                                                            )
                                                        })}
                                                    </Swiper>
                                                </div>
                                            </div>
                                            <div className="bd-blog__navigation">
                                                <button className="blog-button-prev"><i className="fa-regular fa-arrow-left"></i></button>
                                                <button className="blog-button-next"><i className="fa-regular fa-arrow-right"></i></button>
                                            </div>
                                        </div>}
                                        <div className="blog-content-wrapper">
                                            <div className="blog-meta">
                                                <div className="blog-date">
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    <span>{item.date}</span>
                                                </div>
                                                <div className="blog-user">
                                                    <i className="fa-regular fa-user"></i>
                                                    <span><Link href="/blog"><a>{item.metaAuthor}</a></Link></span>
                                                </div>
                                                <div className="blog-comrent">
                                                    <i className="fal fa-comments"></i>
                                                    <span><Link href={`/blog-details/${item.id}`}><a>{item.comment}</a></Link></span>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3><Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link></h3>
                                                <p>{item.desc}</p>
                                                <Link href={`/blog-details/${item.id}`}><a className="blog-btn">{item.blogBtn}</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>

                                <article className="postbox__item format-quote transition-3">
                                    <div className="postbox__quote">
                                        <blockquote>
                                            <p>Only one thing is impossible for God: To find any sense in any copyright law on the planet.
                                                <cite>Sagor Khan</cite>
                                            </p>
                                        </blockquote>
                                    </div>
                                </article>
                            </div>
                            
                            <Pagination />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-8">
                        <div className="sidebar-widget-wrapper mb-30">
                            <BlogSidebarSearch />
                            <BlogSidebarAbout />
                            <BlogSidebarBlogs />
                            <BlogSidebarCategory />
                            <BlogSidebarTags />
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default BlogListSection;