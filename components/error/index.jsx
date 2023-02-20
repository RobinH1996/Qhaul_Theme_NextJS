import Link from 'next/link';
import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Results found for not found'} />
                
                <section className="bd-error__area pt-90 pb-130">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="bd-error__page-content text-center">
                                    <div className="bd-error__number">
                                        <h2>404</h2>
                                    </div>
                                    <div className="bd-error__text">
                                        <h3>Opps! No search result found</h3>
                                        <p>Sorry mate … no items found</p>
                                    </div>
                                    <Link href="/"><a className="bd-error__btn">Back to Home</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterThree />
        </>
    );
};

export default index;