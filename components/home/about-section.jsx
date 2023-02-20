import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="bd-about__area grey-bg p-relative z-index-1 pt-130 pb-70">
            <div className="container">
                <div className="bd-about__bg-wrapper p-relative">
                    <img className="bd-about__bg-shape " src="/assets/img/about/about-big-shape.png" alt="about-big-shape"/>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="bd-about__content-wrapper mb-60">
                            <div className="bd-section__title-wrapper mb-35">
                                <span className="bd-sub__title">About Us</span>
                                <h2 className="bd-section__title mb-35" >We believe in pure and organic quality</h2>
                                <p>We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                            </div>
                            <div className="bd-about__content">
                                <div className="bd-about__features">
                                    <div className="bd-adbout__icon">
                                        <img src="/assets/img/about/about-icon.png" alt="about-icon"/>
                                    </div>
                                    <div className="bd-about__text">
                                        <h4>100% Healthy Quality</h4>
                                        <p>The stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                                    </div>
                                </div>
                                <div className="bd-about__action">
                                    <Link href="/about"><a className="bd-bn__btn-1">About Us</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="bd-about__thumb-wrapper p-relative mb-60 ">
                            <div className="bd-about__thumb-1 w-img">
                                <img src="/assets/img/about/about-img-1.jpg" alt="about-img"/>
                            </div>
                            <div className="bd-about__thumb-2">
                                <img src="/assets/img/about/about-img-2.jpg" alt="about-img"/>
                            </div>
                            <div className="bd-about__quite-box">
                                <div className="quite-content">
                                    <p>{`"Organic foods are very
                                        helpful to our human
                                        body"`}</p>
                                </div>
                                <div className="quite-icon">
                                    <i className="flaticon-quote"></i>
                                </div>
                                <div className="bd-about__quite-name">
                                    <span>Daniel Nirob</span>
                                </div>
                            </div>
                            <div className="bd-about__shape-1">
                                <img src="/assets/img/about/about-shape-1.png" alt="about-shape"/>
                            </div>
                            <div className="bd-about__shape-2"></div>
                            <div className="bd-about__shape-3"></div>
                            <div className="bd-about__shape-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;