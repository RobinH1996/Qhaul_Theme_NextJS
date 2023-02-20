import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';

const TeamSection = () => {
    return (
        <section className="bd-team__area pt-125 pb-95">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-section__title-wrapper text-center mb-60">
                            <span className="bd-sub__title">Professional Team</span>
                            <h2 className="bd-section__title mb-30">Meat the Farmers</h2>
                        </div>
                    </div>
                </div>
                {TeamList &&
                <div className="row">
                    {TeamList.slice(0,4).map((item,num) =>(
                    <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                        <div className="bd-team__wrapper text-center mb-30">
                            <div className="bd-team__thumb w-img p-relative">
                                <Link href={`/product-details/${item.id}`}><a><img src={item.teamImg} alt="team-thumb"/></a></Link>
                                <div className="bd-content__inner">
                                    <div className="bd-team__share">
                                        <Link href={`/product-details/${item.id}`}><a><i className="fa-light fa-share-nodes"></i></a></Link>
                                        <div className="bd-team__action">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bd-team__content">
                                <h4><Link href={`/team-details/${item.id}`}><a>{item.teamTitle}</a></Link></h4>
                                <span>{item.teamSubtitle}</span>
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

export default TeamSection;