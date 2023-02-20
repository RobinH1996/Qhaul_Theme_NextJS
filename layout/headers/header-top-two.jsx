import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="bd-top__bar-area-3 topbar-padding d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-8">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li><a href="tel:+(02)587-898-250"><i className="fa-regular fa-phone-flip"></i>+(01) 720 - 500 -2022</a></li>
                                <li><a><i className="fa-regular fa-house-window"></i>Favicon, New York, USA - 254230</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4">
                        <div className="bd-top__bar-social">
                            <ul><li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;