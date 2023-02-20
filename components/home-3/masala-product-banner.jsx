import Link from 'next/link';
import React from 'react';

const MasalaProductBanner = () => {
    return (
        <Link href="/shop-details"><a>
            <div className="bd-trending__banner p-relative mb-50">
                <div className="bd-trending__banner-thumb w-img">
                    <img src="/assets/img/trending/flash/trending-banner.jpg" alt="trending-banner" />
                </div>
                <div className="bd-td__banner-text">
                    <span>Organic</span>
                    <h3>Fresh Masala</h3>
                </div>
            </div>
        </a></Link>
    );
};

export default MasalaProductBanner;