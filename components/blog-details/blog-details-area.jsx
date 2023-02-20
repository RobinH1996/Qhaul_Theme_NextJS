import Link from 'next/link';
import React from 'react';
import BlogSidebarAbout from '../blog/blog-sidebar-about';
import BlogSidebarBlogs from '../blog/blog-sidebar-blogs';
import BlogSidebarCategory from '../blog/blog-sidebar-category';
import BlogSidebarSearch from '../blog/blog-sidebar-search';
import BlogSidebarTags from '../blog/blog-sidebar-tags';
import BlogCommentForm from './blog-comment-form';
import BlogComments from './blog-comments';

const BlogDetailsArea = ({item}) => {
    return (
        <div className="blog-area pt-115 pb-100">
            <div className="container small-container">
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="blog-main-wrapper mb-30">
                            <div className="row">
                                <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                                    <div className="blog-thumb ">
                                        <img src={item.img} alt="blog-img"/>
                                    </div>
                                    <div className="blog-content-wrapper">
                                        <div className="blog-meta">
                                            <div className="blog-date">
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="blog-user">
                                                <i className="fa-regular fa-user"></i>
                                                <span>{item.metaAuthor}</span>
                                            </div>
                                            <div className="blog-comrent">
                                                <i className="fal fa-comments"></i>
                                                <span>{item?.comment}</span>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <h3>{item.title}</h3>
                                            <p>When it comes to designing better links and sending better emails, Slava
                                                Shestopalov has a few tips on how to improve
                                                your website’s experience while accessibility in mind. There are so many websites
                                                out there that have not considered the overall
                                                usability of their visually impaired users.
                                                The participants will get
                                                general ideas of the land management
                                                system of business. Everyone must work, but for many of us that job isn’t just a
                                                paycheck, it’s an opportunity to express ourselves and make
                                                something better. Entrepreneurs and go-getters often feel as if they carry the
                                                weight of an entire organization on their
                                                backs, and therefore could always use a little extra motivation.</p>
                                            <blockquote>
                                                <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered
                                                    chinwag on your bike mate don’t get
                                                    shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load
                                                    of old tosh blag horse.</p>
                                                <p className="mb-0"><cite>Orgado</cite></p>
                                            </blockquote>
                                            <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no
                                                biggie the BBC burke gosh boot so I
                                                said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish
                                                spend a penny my good sir wind up
                                                hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over
                                                tit mush a blinding shot young
                                                delinquent bloke boot blatant.</p>
                                            <div className="blog-thumb mb-25">
                                                <img src="/assets/img/news/news-02.jpg" alt="blog-img"/>
                                            </div>
                                            <h3>Adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore.</h3>
                                            <p>The participants will get
                                                general ideas of the land management
                                                system of business. Everyone must work, but for many of us that job isn’t just a
                                                paycheck, it’s an opportunity to express ourselves and make
                                                something better. Entrepreneurs and go-getters often feel as if they carry the
                                                weight of an entire organization on their
                                                backs, and therefore could always use a little extra motivation.</p>
                                            <p>When it comes to designing better links and sending better emails, Slava
                                                Shestopalov has a few tips on how to improve
                                                your website’s experience while accessibility in mind. There are so many websites
                                                out there that have not considered the overall
                                                usability of their visually impaired users.</p>
                                            <div className="blog__details__tag tagcloud"><span>Post Tags : </span>
                                                <Link href="/blog"><a>Garden</a></Link>
                                                <Link href="/blog"><a>Vagitable</a></Link>
                                                <Link href="/blog"><a>Planting</a></Link>
                                                <Link href="/blog"><a>Garden care</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <BlogComments />
                            <BlogCommentForm />
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
            </div>
        </div>
    );
};

export default BlogDetailsArea;