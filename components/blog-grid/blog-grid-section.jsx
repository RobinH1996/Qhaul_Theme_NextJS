import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogGridSection = () => {
    return (
        <section className="bd-news__grid-area pt-115 pb-65">
            <div className="container small-container">
                {blogItemsList &&
                <div className="row">
                    {blogItemsList.slice(0,9).map((item, num) => (
                    <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                        <div className="bd-news__item mb-60">
                            <div className="bd-news__thumb w-img">
                                <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="news-image"/></a></Link>
                            </div>
                            <div className="bd-news__content">
                                <div className="bd-news__meta-list">
                                    <div className="bd-news__meta-item">
                                        <span>
                                            <Link href="/blog"><a><i className="fa-light fa-folder-open"></i>{item.metaAuthor}</a></Link>
                                        </span>
                                    </div>
                                    <div className="bd-news__meta-item">
                                        <span><i className="fa-regular fa-clock"></i>{item.date}</span>
                                    </div>
                                </div>
                                <div className="bd-news__title">
                                    <h3>
                                        <Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link>
                                    </h3>
                                </div>
                                <Link href={`/blog-details/${item.id}`}><a className="bd-news__btn">{item.blogBtn}<span><i className="fa-solid fa-arrow-left"></i><i className="fa-solid fa-arrow-left"></i></span></a></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </section>
    );
};

export default BlogGridSection;