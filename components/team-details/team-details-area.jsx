import Link from 'next/link';
import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import TeamAbout from './team-about';
import TeamSkills from './team-skills';

const TeamDetailsArea = ({ item }) => {
    return (
        <>
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Team Details'} />

                <section className="bd-trem__memder pt-115">
                    <div className="container small-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="member-details-thumb w-img mb-60">
                                    <img src={item.teamImg} alt="team-thumb"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bd-team__member-info mb-60">
                                    <span>{item.teamSubtitle}</span>
                                    <h3>{item.teamTitle}</h3>
                                    <p className="mb-40">The spectacular Harbour Central is a brand new development in London’s The Docklands, comprising
                                        a total of 642 private apartments divided across five residential buildings, along with a leisure complex.</p>
                                    <div className="bd-team__member-details mb-40">
                                        <div className="info-meta-single">
                                            <div className="info-meta-icon">
                                                <i className="fa-solid fa-phone-flip"></i>
                                            </div>
                                            <div className="info-meta-text">
                                                <span className="meta-heading">Phone Number</span>
                                                <span className="meta-link"><a href="tel:+(908)786789786">+(908) 786 789 78 6</a></span>
                                            </div>
                                        </div>
                                        <div className="info-meta-single">
                                            <div className="info-meta-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="info-meta-text">
                                                <span className="meta-heading">Email Address</span>
                                                <span className="meta-link"><a
                                                    href="mailto:info@webexample.com">info@webexample.com</a></span>
                                            </div>
                                        </div>
                                        <div className="info-meta-single">
                                            <div className="info-meta-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="info-meta-text">
                                                <span className="meta-heading">Office Location</span>
                                                <span className="meta-link"><a href="#">14/A, Kilix Home Tower, NYC</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="member-details-info-btn">
                                        <Link href="/contact"><a className="bd-fill__btn">Get In Touch</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container small-container">
                    <div className="hr-1"></div>
                </div>

                <TeamSkills />

                <div className="container small-container">
                    <div className="hr-1"></div>
                </div>

                <TeamAbout />
            </main>
        </>
    );
};

export default TeamDetailsArea;