import React from 'react';
import EmailIcon from '../elements/icons/email-icon';
import LocationIcon from '../elements/icons/location-icon';
import PhoneIcon from '../elements/icons/phone-icon';

const ContactForm = () => {
    return (
        <section className="bd-Contact__area pt-105">
            <div className="container">
                <div className="row g-0 justify-content-center">
                    <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-12">
                        <div className="bd-contact__main-wrapper mb-70">
                            <div className="bd-section__title-wrapper">
                                <h2 className="bd-section__title mb-50">Get in Touch</h2>
                            </div>
                            <div className="bd-contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bd-single__form-input mb-20">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bd-single__form-input  mb-20">
                                                <input type="text" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="bd-single__form-input  mb-20">
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="bd-single__form-input  mb-20">
                                                <textarea name="message" id="message" placeholder="Messages"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-btn">
                                        <button type='submit' className="bd-fill__btn">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <div className="bd__sidebar-wrapper mb-70">
                            <div className="bd-sidebar__support">
                                <div className="bd-sidebar__title">
                                    <h4>Support Contact</h4>
                                </div>
                                <div className="bd-sidebar__content">
                                    <div className="bd-contact__list">
                                        <div className="bd-contact__item">
                                            <div className="bd-contact__item-list">
                                                <div className="bd-contact__icon">
                                                    <PhoneIcon />
                                                </div>
                                                <div className="bd-contact__content">
                                                    <div className="bd-contact__title">
                                                        <h4>Phone</h4>
                                                    </div>
                                                    <span>Mobile : <a href="tel:(+88)872-670-780"><span>(+88) 872-670-780</span></a></span>
                                                    <span>Mobile : <a href="tel:(+8)422-655-793"><span>(+8) 422-655 -793</span></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-contact__item">
                                            <div className="bd-contact__item-list">
                                                <div className="bd-contact__icon">
                                                    <EmailIcon />
                                                </div>
                                                <div className="bd-contact__content">
                                                    <div className="bd-contact__title">
                                                        <h4>Email</h4>
                                                    </div>
                                                    <span><a href="mailto:Info@example.com">Info@example.com</a></span>
                                                    <span><a href="mailto:Info@example.com">Contact@example.com</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-contact__item">
                                            <div className="bd-contact__item-list">
                                                <div className="bd-contact__icon">
                                                    <LocationIcon />
                                                </div>
                                                <div className="bd-contact__content">
                                                    <div className="bd-contact__title">
                                                        <h4>Location</h4>
                                                    </div>
                                                    <p>Abbot Favicon Kinney, New York, <br/>
                                                        USA - 25423</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;