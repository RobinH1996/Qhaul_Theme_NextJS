import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer>
            <section className="bd-footer__area grey-bg pt-100 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-1 mb-60">
                                <div className="bd-footer__info">
                                    <div className="bd-footer__logo">
                                        <Link href="/"><a><img src="/assets/img/logo/footer-logo.png" alt="footer-logo"/></a></Link>
                                    </div>
                                    <p>Sed perspiciatis unde omnis natus error voluptatem accusan doloreqe laudantium totam aperiam eaque sipsa quae abillo inventore</p>
                                    <div className="bd-footer__contact">
                                        <span><a href="mailto:Info@example.com"><i className="fa-regular fa-envelope"></i>Info@example.com</a></span>
                                        <span><i className="fa-regular fa-house-chimney"></i>Favicon, New York, USA - 25423</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-2 mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        <li><Link href="/about"><a>About Our Company</a></Link></li>
                                        <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
                                        <li><Link href="/cart"><a>Cart</a></Link></li>
                                        <li><Link href="/shop"><a>Flash Offers</a></Link></li>
                                        <li><Link href="/contact"><a>Terms & Condition</a></Link></li>
                                        <li><Link href="/contact"><a>Privacy Policy</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-3 mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Categories</h4>
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        <li><Link href="/shop"><a>Cuts & Sprouts</a></Link></li>
                                        <li><Link href="/shop"><a>Exotic Fruits & Veggies</a></Link></li>
                                        <li><Link href="/shop"><a>Fresh Fruits</a></Link></li>
                                        <li><Link href="/shop"><a>Fresh Vegetables</a></Link></li>
                                        <li><Link href="/shop"><a>Herbs & Seasoning</a></Link></li>
                                        <li><Link href="/shop"><a>Collectionss</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="bd-footer__subcribe p-relative mb-40">
                                    <form action="#">
                                        <input type="text" placeholder="Enter Your Email"/>
                                            <button className="bd-footer__s-btn"><i className="fa-solid fa-arrow-right-long"></i></button>
                                    </form>
                                </div>
                                <div className="bd-footer__support-wrapper">
                                    <div className="bd-fotter__support-icon">
                                        <img src="/assets/img/icon/support.png" alt="support-img"/>
                                    </div>
                                    <div className="bd-footer__support-inner">
                                        <span>8:30 AM - 9:30 PM</span>
                                        <h4><a href="tel:+58569502352">+585 695 023 52</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bd-sub__fotter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-footer__copyright">
                                <ul>
                                    <li>All Rights Reserved</li>
                                    <li>Copyrighted by ©2022 <span><a href="https://themeforest.net/user/bdevs/portfolio">BDevs</a></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-footer__payment">
                                <ul>
                                    <li><span>We Support</span></li>
                                    <li><a href="#"><img src="/assets/img/icon/discover.png" alt="discover"/></a></li>
                                    <li><a href="#"><img src="/assets/img/icon/mastercard.png" alt="mastercard"/></a></li>
                                    <li><a href="#"><img src="/assets/img/icon/paypal.png" alt="paypal"/></a></li>
                                    <li><a href="#"><img src="/assets/img/icon/visa.png" alt="visa"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;