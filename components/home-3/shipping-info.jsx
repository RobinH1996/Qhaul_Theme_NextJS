import Link from 'next/link';
import React from 'react';
import PaymentIcon from '../elements/icons/payment-icon';
import ReturnIcon from '../elements/icons/return-icon';
import ShippingIcon from '../elements/icons/shipping-icon';
import SupportIcon from '../elements/icons/support-icon';

const ShippingInfo = () => {
    return (
        <div className="bd-sm__features-wrapper mb-30">
            <div className="bd-features__item mb-20">
                <div className="bd-features__icon">
                    <ShippingIcon />
                </div>
                <div className="bd-features__content">
                    <h4><Link href="/about"><a>Free Shipping</a></Link></h4>
                    <span>On All Order Over $599</span>
                </div>
            </div>
            <div className="bd-features__item mb-20">
                <div className="bd-features__icon">
                    <ReturnIcon />
                </div>
                <div className="bd-features__content">
                    <h4><Link href="/about"><a>Easy Returns</a></Link></h4>
                    <span>30 Day Returns Policy</span>
                </div>
            </div>
            <div className="bd-features__item mb-20">
                <div className="bd-features__icon">
                    <PaymentIcon />
                </div>
                <div className="bd-features__content">
                    <h4><Link href="/about"><a>Secure Payment</a></Link></h4>
                    <span>100% Secure Gaurantee</span>
                </div>
            </div>
            <div className="bd-features__item">
                <div className="bd-features__icon">
                    <SupportIcon />
                </div>
                <div className="bd-features__content">
                    <h4><Link href="/about"><a>Special Support</a></Link></h4>
                    <span>24/7 Dedicated Support</span>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;