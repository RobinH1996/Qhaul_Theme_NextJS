import React from 'react';

const TeamSkills = () => {
    return (
        <section>
            <div className="bd-skill__area pt-70">
                <div className="container small-container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="bd-skill__progress-box mb-60">
                                <div className="bd-skill__title mb-40">
                                    <h3>Personal Skills</h3>
                                </div>
                                <div className="bd-skill__style-inner">
                                    <div className="bd-skill__progress p-relative mb-40 fix">
                                        <div className="bd-skill__title-wrapper">
                                            <h3 className="bd-skill__title">Product Sell</h3>
                                        </div>
                                        <span className="progress-count">70%</span>
                                        <div className="progress">
                                            <div className="progress-bar wow slideInLeft" data-wow-duration="1.5s" data-wow-delay=".4s"
                                                role="progressbar" data-width="70%" aria-valuenow="70" aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '70%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__progress p-relative mb-40 fix">
                                        <div className="bd-skill__title-wrapper">
                                            <h3 className="bd-skill__title">Product Delevery Service</h3>
                                        </div>
                                        <span className="progress-count">52%</span>
                                        <div className="progress">
                                            <div className="progress-bar wow slideInLeft" data-wow-duration="1.5s" data-wow-delay=".4s"
                                                role="progressbar" data-width="52%" aria-valuenow="52" aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: '52%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__progress p-relative mb-40 fix">
                                        <div className="bd-skill__title-wrapper">
                                            <h3 className="bd-skill__title">Experience & Research</h3>
                                        </div>
                                        <span className="progress-count">82%</span>
                                        <div className="progress">
                                            <div className="progress-bar wow slideInLeft" data-wow-duration="1.5s" data-wow-delay=".4s"
                                                role="progressbar" data-width="82%" aria-valuenow="82" aria-valuemin="0"
                                                aria-valuemax="100" style={{ width: '82%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="bd-skill__img-inner w-img mb-60">
                                <img src="/assets/img/team/details/team-details-02.jpg" alt="skill-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSkills;