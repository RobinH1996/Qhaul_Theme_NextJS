import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogSidebarBlogs = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Recent posts</h4>
            </div>
            <div className="sidebar__widget-content">
                {blogItemsList &&
                    <div className="rc__post-wrapper">
                        {blogItemsList.slice(9, 12).map((item, num) => (
                            <div className="rc__post d-flex align-items-center" key={num}>
                                <div className="rc__thumb mr-20">
                                    <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="news-image" /></a></Link>
                                </div>
                                <div className="rc__content">
                                    <div className="rc__meta">
                                        <span>{item.date}</span>
                                    </div>
                                    <h6 className="rc__title"><Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link></h6>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogSidebarBlogs;