import React from 'react';

const HeaderTop = () => {
    return (
        <div className="bd-top__bar-area-2 grey-bg-3 d-none d-lg-block">
            <div className="container-fluid">
                <div className="bd-top__bar-main d-flex justify-content-end">
                    <div className="col-xxl-10 col-xl-12 col-12">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-9">
                                <div className="bd-topbar__regtangle ">
                                    <div className="bd-topbar__contact">
                                        <ul>
                                            <li><a href="tel:+(01)720-500-2022"><i className="fa-regular fa-phone-flip"></i>+(01) 720 - 500 -2022</a></li>
                                            <li><a><i className="fa-regular fa-house-window"></i> Denver,Co USA - 80014</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-3">
                                <div className="bd-top__bar-social">
                                    <ul><li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;