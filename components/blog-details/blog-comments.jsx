import React from 'react';

const BlogComments = () => {
    return (
        <div className="bd-postbox__comment mb-55 mt-30">
            <h3 className="postbox__comment-title">3 Comments</h3>
            <ul>
                <li>
                    <div className="bd-postbox__comment-box d-flex">
                        <div className="bd-postbox__comment-avater mr-30">
                            <img src="/assets/img/news/comment/comments-1.png" alt="comments-img" />
                        </div>
                        <div className="bd-postbox__comment-info">
                            <div className="bd-postbox__comment-avater-info d-flex justify-content-between">
                                <div className="bd-postbox__comment-name">
                                    <h4>Rosalina Kelian</h4>
                                    <span className="post-meta"><i className="fa-light fa-calendar-days"></i> 24th March
                                        2022</span>
                                </div>
                                <div className="bd-postbox__comment-reply">
                                    <a href="#"><i className="fa-solid fa-share"></i> Reply</a>
                                </div>
                            </div>
                            <div className="bd-postbox__comment-text">
                                <p>For all the assets is hard and time-consuming technical work. And, of course,
                                    the result needs to be seamless and delightful — dare we say, even fun — to
                                    develop and maintain. Regardless of whether you’re ing up a storefront for a
                                    new merchant.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="children">
                    <div className="bd-postbox__comment-box d-flex mb-40">
                        <div className="bd-postbox__comment-avater mr-30">
                            <img src="/assets/img/news/comment/comments-2.png" alt="comments-img" />
                        </div>
                        <div className="bd-postbox__comment-info">
                            <div className="bd-postbox__comment-avater-info d-flex justify-content-between">
                                <div className="bd-postbox__comment-name">
                                    <h4>Rosalina Kelian</h4>
                                    <span className="post-meta"><i className="fa-light fa-calendar-days"></i> 24th March
                                        2022</span>
                                </div>
                                <div className="bd-postbox__comment-reply">
                                    <a href="#"><i className="fa-solid fa-share"></i> Reply</a>
                                </div>
                            </div>
                            <div className="bd-postbox__comment-text">
                                <p>For all the assets is hard and time-consuming technical work. And, of course,
                                    the result needs to be seamless and delightful — dare we say, even fun — to
                                    develop and maintain. Regardless of whether you’re ing up a storefront for a
                                    new merchant.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bd-postbox__comment-box d-flex mb-40">
                        <div className="bd-postbox__comment-avater mr-30">
                            <img src="/assets/img/news/comment/comments-3.png" alt="comments-img" />
                        </div>
                        <div className="bd-postbox__comment-info">
                            <div className="bd-postbox__comment-avater-info d-flex justify-content-between">
                                <div className="bd-postbox__comment-name">
                                    <h4>Arista Williamson</h4>
                                    <span className="post-meta"><i className="fa-light fa-calendar-days"></i> 24th March
                                        2022</span>
                                </div>
                                <div className="bd-postbox__comment-reply">
                                    <a href="#"><i className="fa-solid fa-share"></i> Reply</a>
                                </div>
                            </div>
                            <div className="bd-postbox__comment-text">
                                <p>For all the assets is hard and time-consuming technical work. And, of course,
                                    the result needs to be seamless and delightful — dare we say, even fun — to
                                    develop and maintain. Regardless of whether you’re ing up a storefront for a
                                    new merchant.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default BlogComments;