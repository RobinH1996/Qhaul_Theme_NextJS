import Link from 'next/link';
import React from 'react';

const FooterThree = () => {
    return (
        <footer>
            <div className="bd-footer__area grey-bg pt-100 pb-60">
                <div className="bd-footer__style-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__logo">
                                        <Link href="/"><a><img src="/assets/img/logo/footer-logo.png" alt="footer-logo"/></a></Link>
                                    </div>
                                </div>
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__link">
                                        <ul>
                                            <li><Link href="/about"><a>About Our Company</a></Link></li>
                                            <li><Link href="/shop"><a>Latest Products</a></Link></li>
                                            <li><Link href="/checkout"><a>Payment Type</a></Link></li>
                                            <li><Link href="/about"><a>Awards Winnings</a></Link></li>
                                            <li><Link href="/about"><a>World Media Partner</a></Link></li>
                                            <li><Link href="/shop"><a>Flash Offers</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-sub__fotter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="bd-footer__copyright text-center">
                                <ul>
                                    <li>All Rights Reserved</li>
                                    <li>Copyrighted by ©2022 <span><a href="https://themeforest.net/user/bdevs/portfolio">BDevs</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterThree;