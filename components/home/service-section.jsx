import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSection = () => {
    return (
        <section className="bd-step__area pt-120 pb-65">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="bd-section__title-wrapper p-relative mb-85">
                            <div className="bd-section__img w-img">
                                <img src="/assets/img/step/title-img.png" alt="title-img" />
                            </div>
                            <span className="bd-step__title">and pure products</span>
                        </div>
                    </div>
                </div>
                {ServicesList &&
                    <div className="row">
                        {ServicesList.slice(0,4).map((item, num) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={num}>
                                <div className="bd-step__item text-center p-relative mb-60">
                                    {item.serviceArrow && <div className="bd-step__arrow">
                                        <img src={item.serviceArrowIcon} alt="step-arrow" />
                                    </div>}
                                    <div className="bd-step__icon">
                                        <img src={item.serviceIcon} alt="step-icon" />
                                    </div>
                                    <div className="bd-step__content">
                                        <h3><Link href="/shop"><a>{item.serviceTitle}</a></Link></h3>
                                        <p>{item.serviceDesc}</p>
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

export default ServiceSection;